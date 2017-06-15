
from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    # TaskApiView,
    TaskListApiView,
    TaskCreateApiView,
    TaskDetailApiView,
    UserCreateAPIView,
    UserLoginAPIView,
    PersonTaskApiView
    )

urlpatterns = [
    
    # Task Api view urls
    url(r'^task/$',TaskListApiView.as_view(), name='task-list'),
    url(r'^task/create/$',TaskCreateApiView.as_view(), name='create-task'),
    url(r'^task/(?P<pk>\d+)$',TaskDetailApiView.as_view(),name="task-detail"),
    url(r'^person/(?P<pk>\d+)$',PersonTaskApiView.as_view(),name="person-task"),

    # Account Api view urls
    url(r'^account/register/$',
            UserCreateAPIView.as_view(),name="new_user"),

    url(r'^account/login/$',
            UserLoginAPIView.as_view(),name="login"),

]
