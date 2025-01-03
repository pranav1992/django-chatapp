from django.db import models
from user.models import Profile
from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid

# Create your models here.
class ChatModel(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique=True, 
                          primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    is_group = models.BooleanField(default=False)
    created_by = models.ForeignKey(Profile,on_delete=models.DO_NOTHING, related_name='chats_created')
    created_with = models.ForeignKey(Profile,on_delete=models.DO_NOTHING, null=True, blank=True, related_name='chats_received' )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.name)
    

# create a chat member while instantiate a chatroom  
@receiver(post_save, sender=ChatModel)
def createMember(sender, instance, created, **kwargs):
    if created:
        chat = instance
        profile = chat.created_by
        created_with = chat.created_with
        member = ChatMember.objects.create(
            user = profile,
            ROLE_CHOICES =  "admin",
            role = "admin",
            chat = chat
        )
        if chat.is_group == False:
            member2 = ChatMember.objects.create(
                user = created_with,
                ROLE_CHOICES =  "admin",
                role = "admin",
                chat = chat
            )

class ChatMember(models.Model):
    ROLE_TYPE = (
        ('admin', 'admin'),
        ('member', 'member')
        )
    id = models.UUIDField(default = uuid.uuid4, unique=True, 
                          primary_key=True, editable=False)
    chat = models.ForeignKey(ChatModel, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    ROLE_CHOICES = models.CharField(max_length=200, choices=ROLE_TYPE)
    role = models.CharField(max_length=100, null=True, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.user)


class Message(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique=True, 
                          primary_key=True, editable=False)
    chat = models.ForeignKey(ChatModel,on_delete= models.CASCADE)
    sender = models.ForeignKey(Profile, on_delete=models.CASCADE)
    content = models.TextField(max_length=1000, null=True, blank=True)
    media_url = models.CharField(max_length=1000, null=True, blank=True)
    def __str__(self):
        return str(self.content)


