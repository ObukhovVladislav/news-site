from django.db import models, transaction
from django.utils import timezone

from authapp.models import UserProfile


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
    is_active = models.BooleanField(default=True, db_index=True)

    def __str__(self):
        return f'{self.title}'

    def restore(self):
        self.is_active = True
        self.title = self.title[1:]
        self.comment_set.all().update(is_active=True)
        self.save()
        return self

    def delete(self, using=None, keep_parents=False):
        self.is_active = False
        with transaction.atomic() as _:
            self.comment_set.all().update(is_active=False)
            self.title = f'_{self.title}'

            self.save()
        return 1, {}

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, verbose_name='Новость')
    name = models.ManyToManyField('authapp.UserProfile', related_name='comm_author')
    text = models.CharField(verbose_name='Текст комментария', max_length=200)
    created = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True, db_index=True)

    def __str__(self):
        return f'{self.article}'

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'комментарии'
