from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index),
    url(r'^add_course$', views.add_course),
    url(r'^course_remove/(?P<id>\d+)$', views.course_remove),
    url(r'^class_removal/(?P<id>\d+)$', views.class_removal),
]
