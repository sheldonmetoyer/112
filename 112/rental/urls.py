from django.urls import path
from . import views


#add object to map urls with actionas in views.py



urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.index, name='home'),
    path('catalog', views.catalog, name='catalog'),
    path('developer', views.developer, name='devName'),
    path('details/<int:movie_id>', views.details, name='details'),
]

