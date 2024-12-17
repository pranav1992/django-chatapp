from django.contrib import admin
from .models import ChatModel, ChatMember, Message

# Register your models here.

admin.site.register(ChatModel)
admin.site.register(ChatMember)
admin.site.register(Message)