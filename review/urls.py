"""
    Define routes in review app
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.write_review, name='write_review'),
]
