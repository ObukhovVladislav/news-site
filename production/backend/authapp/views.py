from django.contrib.auth.views import LoginView
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from authapp.forms import MyAuthForm
from authapp.models import UserProfile
from authapp.serializers import UserProfileSerializer


class UserViewsSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class MyLogin(LoginView):
    template_name = 'authapp/login.html'
    form_class = MyAuthForm
