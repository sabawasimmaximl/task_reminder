from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from django.contrib.auth import get_user_model
from models import Task,Person,Notification

from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)

from rest_framework import serializers
from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    ValidationError
    )

User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields=['id','username']    


class PersonSerializer(ModelSerializer):
    user=UserSerializer()
    class Meta:
        model=Person
        fields=['user','id']

class TaskSerializer(ModelSerializer):
    person=UserSerializer()
    class Meta:
        model=Task
        fields=['title','person']

class TaskCreateSerializer(ModelSerializer):
    class Meta:
        model=Task
        fields='__all__'        
          

class NotificationSerializer(ModelSerializer):
    class Meta:
        model=Notification
        fields=['time_created','message']        



        








