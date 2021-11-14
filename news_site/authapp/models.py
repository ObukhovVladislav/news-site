from django.contrib.auth.models import AbstractUser
from django.db import models


class Gender(models.TextChoices):
    GENDER_MAN = 'm', 'Мужчина'
    GENDER_WOMAN = 'w', 'Женщина'


class UserProfile(AbstractUser):
    img = models.ImageField(verbose_name="Фото",
                            upload_to='users_photo', blank=True)
    gender = models.CharField(max_length=1, choices=Gender.choices, default=Gender.GENDER_MAN)
