# Generated by Django 5.1.1 on 2024-09-15 23:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='pwd',
        ),
    ]
