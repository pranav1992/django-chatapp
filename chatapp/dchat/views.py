from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ChatModelSerializer, ChatMembersSerializer
from .serializers import MessagesSerializer
from .models import ChatModel, ChatMember, Message
from rest_framework import status

# Create your views here.

# Create a chatroom and instatiate a chat member
@api_view(['POST'])
def create_Chat(request):
    try:
        print(request.data)
        serializer = ChatModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def create_chat_with(request):
    try:
        serializer = ChatModelSerializer(
            data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# get all the chatrooms
@api_view(['GET'])
def get_Chat(request):
    try:
        data = ChatModel.objects.all()
        serializer = ChatModelSerializer(data, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Get the chat-rooms relative to the user id  
@api_view(['GET'])
def get_user_chat(request, userId):
    try:
        data = ChatMember.objects.filter(user = userId)
        print(data)
        serializer = ChatMembersSerializer(data, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# get chat members relative to the chat id
@api_view(['GET'])
def get_chat_members(request, chat_id):
    try:
        chatmembers = ChatMember.objects.filter(chat = chat_id)
        serializer =  ChatMembersSerializer(chatmembers, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# add a chat member to the the chatroom
@api_view(['POST'])
def set_chat_members(request):
    try:
        serializer =  ChatMembersSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# get messages relative to the given chat-room
@api_view(['GET'])
def get_messages(request):
    try:
        data = Message.objects.all()
        serializers = MessagesSerializer(data, many= True)
        return Response(serializers.data)
    except Exception as e:
        return Response({'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def set_message(request):
    try:
        serializer = MessagesSerializer(data = request.data)
        if serializer.is_valid:
            serializer.save()
        return Response(serializer.data)
    except Exception as e:
        return Response({"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR)