from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("Email field must be set!")

        email = self.normalize_email(email)
        user = self.model(username=username.strip(),
                          email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(
        unique=True, max_length=150,
        help_text="Requirs 150 characters or less. Letters, digits and spaces only.",
        validators=[],
        error_messages={
            'unique': "A user with that username already exists."
        }
    )
    email = models.CharField(unique=True, max_length=128)
    city = models.CharField(max_length=128, blank=True, null=True)
    province = models.CharField(max_length=128, blank=True, null=True)
    joined_at = models.DateTimeField(blank=True, auto_now_add=True)
    bio = models.CharField(max_length=512, blank=True, null=True)
    profile_pic = models.ImageField(
        upload_to="uploads/%Y-%m-%d/", max_length=1024)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        managed = True
        db_table = 'User'

    def get_full_name(self):
        return self.username
