from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^team/(?P<id>\d+)$', views.team, name='team'),
    url(r'make_team', views.make_team, name='make_team'),
    url(r'^make_lineup/(?P<id>\d+)$', views.make_lineup, name='make_lineup'),
]