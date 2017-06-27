from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns


from .views import (
    NotificationListApiView,
    PersonDetailApiView,     
    PersonListApiView,
    TaskCreateApiView,
    TaskDetailApiView,
    TaskListApiView,
    TaskListApiView, 
    )

urlpatterns = [

    # Notification Api view urls
    url(r'^notification/list/',NotificationListApiView.as_view(),name="notification-list"),
    
    # Task Api view urls
    url(r'^task/list/$',TaskListApiView.as_view(), name='task-list'),
    url(r'^task/create/$',TaskCreateApiView.as_view(), name='create-task'),
    url(r'^task/(?P<pk>\d+)/$',TaskDetailApiView.as_view(),name="task-detail"),
    url(r'^task/$',TaskListApiView.as_view(),name="person-task"),

    # person list
    url(r'^persons/$',PersonListApiView.as_view(),name="person_list"),
    url(r'^person/(?P<pk>\d+)/$',PersonDetailApiView.as_view(),name="person_detail"),
    
]

