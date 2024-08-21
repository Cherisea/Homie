"""
    Define routes in login app
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('auth/', views.authenticate, name='auth'),
    path('write-review/', views.write_review, name='write-review'),
    path('register/', views.register, name='register')
]
