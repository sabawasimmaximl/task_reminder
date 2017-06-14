
from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)

from rest_framework import serializers
from models import Task,UserProfile
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

def InvalidUsernameValidator(value):
    if '@' in value or '+' in value or '-' in value:
        raise ValidationError('Enter a valid username.')

def UniqueEmailValidator(value):
    if User.objects.filter(email__iexact=value).exists():
        raise ValidationError('User with this Email already exists.')

def UniqueUsernameIgnoreCaseValidator(value):
    if User.objects.filter(username__iexact=value).exists():
        raise ValidationError('User with this Username already exists.')


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class UserRegisterSerializer(ModelSerializer):
    username = serializers.CharField(
         max_length=30,
         required=True,
         help_text='Usernames may contain <strong>alphanumeric</strong>, <strong>_</strong> and <strong>.</strong> characters')
    password = serializers.CharField()
    confirm_password = serializers.CharField( 
         label="Confirm your password",
         required=True)

    class Meta:
        model=UserProfile
        fields=['username','password','confirm_password']

    def __init__(self, *args, **kwargs):
          super(UserProfileSerializer, self).__init__(*args, **kwargs)
          self.fields['username'].validators.append(InvalidUsernameValidator)
          self.fields['username'].validators.append(UniqueUsernameIgnoreCaseValidator)
          
    def clean(self):
        super(UserProfileSerializer, self).clean()
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data.get('confirm_password')
        if password and password != confirm_password:
            self._errors['password'] = self.error_class(['Passwords don\'t match'])
        return self.cleaned_data 


class UserLoginSerializer(ModelSerializer):

    class Meta:
        model=UserProfile
        fields=['username','password']          

        








