from django.urls import path
from .views import search_recipes_view

urlpatterns = [
    path('search/', search_recipes_view, name='search_recipes'),
]
