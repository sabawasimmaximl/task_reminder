
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
    UserLoginAPIView
    )

urlpatterns = [
    
    # Task api view urls
    url(r'^task/$',TaskListApiView.as_view(), name='task-list'),
    url(r'^task/create/$',TaskCreateApiView.as_view(), name='create-task'),
    url(r'^task/(?P<pk>\d+)$',TaskDetailApiView.as_view(),name="task-detail"),


    # url(r'^task/$',TaskApiView.as_view({'get':'list'}), name='task-list'),
    # url(r'^task/create/$',TaskApiView.as_view({'post':'create_new_task'}), name='create-task'),
    # url(r'^task/(?P<task_id>\d+)$',TaskApiView.as_view({'get':'task_detail'}),name="task-detail"),

    # account Api view
    url(r'^account/register/$',
            UserCreateAPIView.as_view(),name="new_user"),

    url(r'^account/login/$',
            UserLoginAPIView.as_view(),name="login"),


]
