from django.conf.urls import url
from django.contrib import admin
from . import views

#Models -- views -- TEMPLATES

urlpatterns = [
    url(r'^$', views.index),
]

