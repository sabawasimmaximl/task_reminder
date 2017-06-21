from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.db import IntegrityError
from django.core import serializers
import json
from models import Task,Person
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
    IsAuthenticatedOrReadOnly,


    )

# serializers
from .serializers import (
    TaskSerializer,
    PersonTaskSerializer,
    UserSerializer,
    )

User = get_user_model()

class TaskApiView(ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def list(self,request,*args,**kwargs):
        task_data = []
        task_list = Task.objects.all()
        for task in task_list:
            task_dict = {}
            task_dict['task_id']=task.id
            task_dict['title'] = task.title
            task_dict['person_id'] = task.person.id
            task_dict['username']=task.person.user.username
            task_data.append(task_dict)

        return Response({"results":task_data},status=HTTP_200_OK)
    

    def create_new_task(self, request,*args,**kwargs):
        # token=request.data['token']
        title =request.data["title"]
        person_id = request.data["person"]
        # Create a new task
        person =Person.objects.get(id=person_id)
        new_task=Task(title=title,person=person)
        new_task.save()
        return Response({"message": "Successfully Saved!"})


    def get_task_detail(self,request,*args,**kwargs):
        try:
            task_data = {}
            task_id = kwargs['task_id']
            task_instance = Task.objects.get(id=task_id)
            task_data['id']=task_instance.id
            task_data['title']= task_instance.title
            task_data['username']= task_instance.person.user.username

            return Response({"results":task_data})
        except:
            return Response(status=HTTP_400_BAD_REQUEST) 

# Person TaskApi view
class PersonApiView(ModelViewSet):
    queryset=Person.objects.all()
    serializer_class=PersonTaskSerializer

    def person_list(self,request,*args,**kwargs):
        print 'fetching person data'
        person_data = []
        person_list = Person.objects.all()
        for person in person_list:
            person_dict = {}
            person_dict['id']=person.id
            person_dict['name'] = person.user.username
            person_data.append(person_dict)

        return Response({"results":person_data},status=HTTP_200_OK)

    def get_person_task_detail(self,request,*args,**kwargs):
        print 'inside fetching person task detail'
        person_task_data=[]
        try:
            person_data = {}
            person_id = kwargs['person_id']
            person_instance = Person.objects.get(id=person_id)
            print person_instance.user.username
            person_data['id']=person_instance.id
            person_data['name']= person_instance.user.username
            print person_data

            task_list = []
            list_of_task = Task.objects.filter(person=person_instance)
            print list_of_task
            for task in list_of_task:
                task_dict = {}
                task_dict['task_id']=task.id
                task_dict['title']=task.title
                task_list.append(task_dict)

            print task_list

            person_task_data.append(task_list)
            print person_data

            return Response({"results":person_task_data},status=HTTP_200_OK)
        except:
            return Response({"message":"Something went wrong"},status=HTTP_400_BAD_REQUEST)           
    

# Account Api view 
class UserApiView(ModelViewSet):
    queryset=Person.objects.all()
    serializer_class=UserSerializer

    def register(self,request,*args,**kwargs):
        try:
            username = request.POST.get('username', None)
            password = request.POST.get('password', None)

            if username is not None and password is not None:
                try:
                    user = User.objects.create_user(username, None, password)
                except IntegrityError:
                    return Response({
                        'error': 'User already exists'
                    }, status=HTTP_400_BAD_REQUEST)
                token = Token.objects.create(user=user)
                new_user=Person()
                new_user.user=user
                new_user.save()
                return Response({
                    'token':token,
                    'username': user.username
                },status=HTTP_200_OK)
            else:
                return Response({
                    'error': 'Invalid Data'
                }, status=HTTP_400_BAD_REQUEST)
    
        except:
            return Response({'error': 'Invalid Method'}, status=HTTP_400_BAD_REQUES)


class AuthTokenApiView(APIView):
    serializer_class = AuthTokenSerializer
    permission_classes =[AllowAny]    

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key,'username':user.username})


