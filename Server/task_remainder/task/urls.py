from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns


from .views import (
    TaskApiView,     
    PersonApiView,
    UserApiView,
    )

urlpatterns = [
    
    # Account Api view urls
    url(r'^account/register/$',
            UserApiView.as_view({'post':'register'}),name="register"),

    # Task Api view urls
    url(r'^task/list/$',TaskApiView.as_view({'get':'list'}), name='task-list'),
    url(r'^task/create/$',TaskApiView.as_view({'post':'create_new_task'}), name='create-task'),
    url(r'^task/(?P<task_id>.+)/$',TaskApiView.as_view({'get':'get_task_detail'}),name="task-detail"),
    
    # person list
    url(r'^person/list/$',PersonApiView.as_view({'get':'person_list'}),name="person_list"),
    url(r'^person/(?P<person_id>.+)/$',PersonApiView.as_view({'get':'get_person_task_detail'}),name="person-task"),

    
]
