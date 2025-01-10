from django.urls import path
from .views import create_user, get_users, get_profile, register_user, log_in
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', get_users), # Get all users
    path('get-profile/<str:id>/', get_profile), # Get all profiles
    path('create-user/', create_user), 
    path('signup/', register_user),
    path('signin/',log_in ),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]