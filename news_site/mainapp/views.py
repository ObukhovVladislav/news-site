from django.views.generic import ListView
from mainapp.serializers import ArticleSerializer, CommentSerializer
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Article, Comment


class ArticleList(ListView):
    model = Article


class CommentList(ListView):
    model = Comment


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.filter(is_active=True)
    serializer_class = ArticleSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.filter(is_active=True)
    serializer_class = CommentSerializer
