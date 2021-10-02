from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from authapp.models import UserProfile
from authapp.serializers import UserProfileSerializer


class UserViewsSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
