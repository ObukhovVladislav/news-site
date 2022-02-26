from django.core.management.base import BaseCommand

from mainapp.models import Article, Comment


class Command(BaseCommand):
    help = "Создание статей"

    def handle(self, *args, **options):
        article = Article.objects.create(title='Статья 1',
                                         short_text='Короткий текст 1',
                                         text='Текст 1')

        comment = Comment.objects.create(article=article,
                                         text='Текст комментария 1')

    print('Статьи созданы')
