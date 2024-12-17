from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ChatModelSerializer, ChatMembersSerializer, MessagesSerializer
from .models import ChatModel, ChatMember, Message

# Create your views here.
@api_view(['POST'])
def create_Chat(request):
    serializer = ChatModelSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['GET'])
def get_Chat(request):
    data = ChatModel.objects.all()
    serializer = ChatModelSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_user_chat(request, userId):
    data = ChatMember.objects.filter(user = userId)
    print(data)
    serializer = ChatMembersSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_chat_members(request, chat_id):
    chatmembers = ChatMember.objects.get(id = chat_id)
    serializer =  ChatMembersSerializer(chatmembers, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def set_chat_members(request):
    serializer =  ChatMembersSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['GET'])
def get_messages(request):
    data = Message.objects.all()
    print(data)
    serializers = MessagesSerializer(data, many= True)
    return Response(serializers.data)



