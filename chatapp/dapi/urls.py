from django.urls import path
from dchat.views import create_Chat, get_Chat, get_chat_members
from dchat.views import set_chat_members, get_user_chat, get_messages
urlpatterns = [
    path('create-chat/', create_Chat),
    path('get_chats/', get_Chat),
    path('get_chat_members/<str:chat_id>/',get_chat_members),
    path('get_user_chat/<str:userId>/',get_user_chat),
    path('set-chatmember/',set_chat_members),
    path('get-chats-messages/', get_messages)
]