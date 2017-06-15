from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)

from rest_framework import serializers
from models import Task,Person
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from django.contrib.auth import get_user_model

from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    ValidationError
    )

User = get_user_model()

class PersonSerializer(ModelSerializer):
    class Meta:
        model=Person
        fields='__all__'        


class TaskSerializer(ModelSerializer):
    class Meta:
        model=Task
        fields=['title','person']


# crateing new user serializer
class UserCreateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            
        ]
        extra_kwargs = {"password":
                            {"write_only": True}
                            }
                            
    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']
        user_obj = User(
                username = username,
            )
        user_obj.set_password(password)
        user_obj.save()
        return validated_data


# user login serializer
class UserLoginSerializer(ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField()
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'token',
            
        ]
        extra_kwargs = {"password":
                            {"write_only": True}
                            }
  



        








