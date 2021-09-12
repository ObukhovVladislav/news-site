from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):
    def handle(self, *args, **options):
        i = 0
        while i <= 9:
            UserProfile.objects.create_user(f'user{i + 1}', password='password')
            i += 1
        UserProfile.objects.create_superuser('admin', password='admin')
        print('Пользователи созданы')
