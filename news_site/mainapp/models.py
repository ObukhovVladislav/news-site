from django.db import models
from datetime import date
import datetime
from django.utils import timezone


class Category(models.TextChoices):
    INTERNET = 'IT', 'Интернет'
    CULTURE = 'CE', 'Культура'
    SOCIETY = 'SY', 'Общество'
    POLICY = 'PY', 'Политика'
    SPORT = 'ST', 'Спорт'
    ECONOMY = 'EY', 'Экономика'


class Article(models.Model):
    title = models.CharField(verbose_name='Название', max_length=200)
    category = models.CharField(max_length=2, choices=Category.choices, default=Category.INTERNET,
                                verbose_name='Категория')
    img = models.ImageField(verbose_name='Фотография', upload_to='img/article', blank=True)
    short_text = models.CharField(verbose_name='Короткий текст', max_length=200)
    text = models.TextField(verbose_name='Текст')
    date = models.DateTimeField(verbose_name='Дата публикации', auto_now_add=True)

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, verbose_name='Новость')
    name = models.ManyToManyField('authapp.UserProfile', related_name='comm_author')
    text = models.CharField(verbose_name='Текст комментария', max_length=200)
    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.article}'

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'комментарии'
