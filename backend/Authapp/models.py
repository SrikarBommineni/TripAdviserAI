from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(unique=True)  # Make email unique

    USERNAME_FIELD = "email"  # Use email instead of username
    REQUIRED_FIELDS = ["username"]  # still ask for username when creating superuser

    def __str__(self):
        return self.email
