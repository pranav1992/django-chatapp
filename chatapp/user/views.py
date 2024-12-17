from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer
from .models import Profile

# Create your views here.
@api_view(['GET'])
def get_users(request):
    user = User.objects.all()
    serialize = UserSerializer(user, many= True)
    return Response({'user': serialize.data})


@api_view(['GET'])
def get_profile(request):
    user = Profile.objects.all()
    serialize = ProfileSerializer(user, many= True)
    return Response({'user': serialize.data})


@api_view(['POST'])
def create_user(request):
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
    

