from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    # TaskApiView,
    PersonTaskApiView,
    TaskListApiView,
    TaskCreateApiView,
    TaskDetailApiView,
    UserCreateAPIView,
    UserLoginAPIView,
    PersonListApiView,
    )

urlpatterns = [
    
    # Account Api view urls
    url(r'^account/register/$',
            UserCreateAPIView.as_view(),name="new_user"),

    url(r'^account/login/$',
            UserLoginAPIView.as_view(),name="login"),


    # Task Api view urls
    # url(r'^task/$',TaskListApiView.as_view(), name='task-list'),
    url(r'^task/create/$',TaskCreateApiView.as_view(), name='create-task'),
    url(r'^task/(?P<pk>\d+)$',TaskDetailApiView.as_view(),name="task-detail"),

    # ModelViewSet
    url(r'^task/list$',PersonTaskApiView.as_view({"get":"list"}),name="task_list"),

    url(r'^task/person/(?P<person_id>.+)$',PersonTaskApiView.as_view({"get":"person_task_detail"}),name="person-task"),

    # url(r'^person/create$',PersonCreateApiView.as_view(),name="person-create"),
    url(r'^person/list/$',PersonListApiView.as_view(),name="person_list"),
    
]
