from django.db import models
from tastypie.resources import ModelResource, fields, ALL
from rental.models import Movie, Genre
from tastypie.authorization import Authorization

# Create your models here.
class MovieResource(ModelResource):
    class Meta:
        queryset = Movie.objects.all()
        resource_name = "movies"
        filtering = {
            'price': ALL,
            'title': ALL,
            'release_year': ALL
        }
        ordering: ["release_year", "title", "director"]
        allowed_methods = ['get', 'post', 'put', 'patch', 'delete']
        authorization = Authorization()


"""
Filtering:
?price=20

?price__gt=10
?price__lt=30

?title__contrains=tit

"""