
from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    TaskApiView,
    RegisterApiView,
    LoginApiView
    )

urlpatterns = [
    
    # Task api view urls
    url(r'^task/$',csrf_exempt(TaskApiView.as_view({'get':'list'})), name='tasktask-list'),
    url(r'^task/create/$',csrf_exempt(TaskApiView.as_view({'post':'create_new_task'})), name='create-task'),
    url(r'^task/(?P<task_id>.+)$',csrf_exempt(TaskApiView.as_view({'get': 'task_detail'})),name="task-detail"),

    # account Api view
    url(r'^account/register/$',
            csrf_exempt(RegisterApiView.as_view({'post':'create_new_user'})),name="new_user"),

    url(r'^account/login/$',
            csrf_exempt(LoginApiView.as_view({'post':'login'})),name="login"),


]
