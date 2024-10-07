"""
    Define routes in login app
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('users', views.getUsers)
]
