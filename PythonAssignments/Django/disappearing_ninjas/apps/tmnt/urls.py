from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas/(?P<ninja_color>[a-z]+$)',views.ninjas) # \ww works too
]