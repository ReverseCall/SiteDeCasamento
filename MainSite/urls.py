from django.urls import path
from . views import Teste

urlpatterns = [
    path('', Teste, name="home")
]