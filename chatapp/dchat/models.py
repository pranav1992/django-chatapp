from django.db import models
from user.models import Profile
import uuid

# Create your models here.
class ChatModel(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique=True, 
                          primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    is_group = models.BooleanField(default=False)
    created_by = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.name)

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


