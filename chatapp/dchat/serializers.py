from rest_framework import serializers
from .models import ChatModel, ChatMember, Message

class ChatModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatModel
        fields = '__all__'

class ChatMembersSerializer(serializers.ModelSerializer):
    chat = ChatModelSerializer(many=False)
    class Meta:
        model = ChatMember
        fields = '__all__'

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'