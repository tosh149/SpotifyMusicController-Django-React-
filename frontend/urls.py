from .views import index
from django.urls import path

app_name = 'frontend'

urlpatterns = [
    path('', index, name='home'),
    path('join', index),
    path('info', index),
    path('create', index),
    path('room/<str:roomCode>', index),
]
    