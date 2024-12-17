from django.db import models
from django.contrib.auth.models import User
import uuid


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True,
                                 blank=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    user_name = models.CharField(max_length=200, blank=True, null=True)
    profile_picture = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, 
                          editable=False)

    def __str__(self):
        return str(self.user_name)