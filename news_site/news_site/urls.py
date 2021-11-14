"""news_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

import authapp.views as authapp
import mainapp.views as mainapp

router = DefaultRouter()
router.register('users', authapp.UserViewsSet)
router.register('articles', mainapp.ArticleViewSet)
router.register('comments', mainapp.CommentViewSet)

urlpatterns = [
    path('articles/', mainapp.ArticleList.as_view()),
    path('articles/comments/', mainapp.CommentList.as_view()),

    path('auth/login/', authapp.MyLogin.as_view(), name='login'),

    path('api/', include(router.urls)),

    path('admin/', admin.site.urls),
]
