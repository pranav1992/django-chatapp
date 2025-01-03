from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Profile


# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class GenerateTokenView(APIView):
    def post(self, request, *args, **kwargs):
        user = request.user  # or fetch the user as needed
        if user.is_authenticated:  # Ensure the user is authenticated
            # Use the custom serializer to get the token
            token = MyTokenObtainPairSerializer.get_token(user)
            refresh_token = str(token)
            access_token = str(token.access_token)

            return Response({
                'refresh': refresh_token,
                'access': access_token,
            })
        return Response({'detail': 'User not authenticated'}, status=403)
    


@api_view(['POST'])
def register_user(request):
    try:
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        if not username or not password:
            return Response({'error': 'Username and Password are required'}, 
            status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'User already exist.'}, 
            status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password, 
                                        email=email, first_name=first_name, 
                                        last_name=last_name)
        return Response({'message': 'User register successfully', 
            'user_id': user.id}, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response({'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['POST'])
def log_in(request):
    try:
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Username and password required'},
                status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful.', 'user_id': user.id},
                status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password.'},
                status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_users(request):
    try:  
        user = User.objects.all()
        serialize = UserSerializer(user, many= True)
        return Response({'user': serialize.data})
    
    except Exception as e:
        return Response({'error': str(e)},
             status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_profile(request):
    try:
        user = Profile.objects.all()
        serialize = ProfileSerializer(user, many= True)
        return Response({'user': serialize.data})
    
    except Exception as e:
        return Response({'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def create_user(request):
    try:
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    except Exception as e:
        return Response({'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

