
from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    TaskApiView,
    )

urlpatterns = [
    
    # Task api view urls
    url(r'^task/$',csrf_exempt(TaskApiView.as_view({'get':'list'})), name='tasktask-list'),
    url(r'^task/create/$',csrf_exempt(TaskApiView.as_view({'post':'create_new_task'})), name='create-tasktask'),
   

]
