from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)

from rest_framework import serializers
from models import Task
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from django.contrib.auth import get_user_model

from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    ValidationError
    )

User = get_user_model()

class TaskSerializer(ModelSerializer):
    class Meta:
        model=Task
        fields="__all__"


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
    def validate(self, data):
        return data

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
    def validate(self, data):
        return data




        








