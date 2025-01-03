from django.urls import path
from dchat.views import create_Chat, get_Chat, get_chat_members, create_chat_with
from dchat.views import set_chat_members, get_user_chat, get_messages, set_message
urlpatterns = [
    path('create-chat/', create_Chat), # Create a chat
    path('create-chat-with/', create_chat_with), # create chat with sender and receiver 
    path('get_chats/', get_Chat), # Get all chat
    # get chat members relative to the chat-id
    path('get_chat_members/<str:chat_id>/',get_chat_members), 
    # get chat-rooms retative to the userid
    path('get_user_chat/<str:userId>/',get_user_chat), 
    # set chat-member to the chatroom
    path('set-chatmember/',set_chat_members),
    # get messages relative to the chatroom
    path('get-chats-messages/', get_messages),
    path('set-message/',set_message)
    
]






















