from django.urls import path
from .views import create_user, get_users, get_profile

urlpatterns = [
    path('', get_users),
    path('get-profile/', get_profile),
    path('create-user/', create_user)
]