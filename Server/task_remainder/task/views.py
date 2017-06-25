from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.db import IntegrityError
from django.core import serializers
from django.db.models import Q
import django_filters
from django_filters.rest_framework import DjangoFilterBackend
from django.utils import timezone
from datetime import timedelta
import datetime
import json
from models import Task,Person,Notification
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework import parsers, renderers
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly
    )

from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView   

# serializers
from .serializers import (
    NotificationSerializer,
    TaskSerializer,
    PersonSerializer,
    UserSerializer,
    )

#celery tasks
from tasks import *

User = get_user_model()

# Authentication 
class AuthTokenApiView(APIView):
    serializer_class = AuthTokenSerializer
    permission_classes =[AllowAny]    

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key,'username':user.username})

# Task Api view
class TaskListApiView(ListAPIView):
    serializer_class=TaskSerializer
    queryset=Task.objects.all()

class TaskCreateApiView(CreateAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer

    def create(self,request,*args,**kwargs):
        try:
            person_id=request.data['person']
            person=Person.objects.get(user=person_id)
            task_title=request.data['title'] 
            reminder_time=request.data['reminder_time']
            # converitng unicode string(reminder_time) into datetime
            reminder_time=datetime.datetime.strptime(reminder_time, '%Y-%m-%dT%H:%M:%SZ')
            task=Task(title=task_title,reminder_time=reminder_time,person=person)
            task.save()
            create_notification.apply_async((reminder_time,person,task_title),eta=reminder_time)
            return Response({'success':True},status=HTTP_200_OK)
        except Exception as e:
            return Response({'success':False,'error':e})

class TaskDetailApiView(RetrieveAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    lookup_field="pk"

# person Api view
class PersonListApiView(ListAPIView):
    queryset=Person.objects.all()
    serializer_class=PersonSerializer

class PersonDetailApiView(RetrieveAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer  
    lookup_field="pk"  

class TaskFilter(django_filters.FilterSet):
    class Meta:
        model=Task
        fields={
            'title':['exact'],
            'person':['exact']
        }

class TaskListApiView(ListAPIView):
    queryset = Task.objects.all()
    serializer_class=TaskSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_class = TaskFilter

# Notification Api 
class NotificationListApiView(ListAPIView):
    queryset=Notification.objects.all()
    serializer_class=NotificationSerializer



