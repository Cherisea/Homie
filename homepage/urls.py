"""
    A module that defines routes mapping to different endpoints in homepage
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('search/', views.search, name="search")
]
