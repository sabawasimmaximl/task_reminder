from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.utils import timezone
from django.contrib.auth import get_user_model
import json
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from models import Task,Person

# serializers
from .serializers import (
    UserCreateSerializer,
    UserLoginSerializer,
    TaskSerializer,
    PersonTaskSerializer,
    )

from rest_framework.views import APIView
from rest_framework.mixins import DestroyModelMixin, UpdateModelMixin
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView, 
    RetrieveAPIView,
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,

    )
User = get_user_model()

class TaskCreateApiView(APIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[permissions.AllowAny]

    def post(self, request):
        title =request.POST.get("title")
        person_id = request.POST.get("person")
        print person_id
        # Create a new task
        person =Person.objects.get(id=person_id)
        new_task=Task(title=title,person=person)
        new_task.save()
        return Response({"message": "Successfully Saved!"})

class TaskListApiView(ListAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[permissions.AllowAny]


    def perform_create(self,serializer):
        serializer.save(person=self.request.user.username)

    def list(self,request):
        queryset=self.get_queryset()
        serializer=TaskSerializer(queryset,many=True)
        return Response({"task_data":serializer.data})    


class TaskDetailApiView(RetrieveAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[permissions.AllowAny]
    lookup_field="pk"


# Person TaskApi view
class PersonTaskApiView(ModelViewSet):
    queryset=Person.objects.all()
    serializer_class=PersonTaskSerializer
    permission_classes=[permissions.AllowAny]

    def list(self,request,*args,**kwargs):
        print 'fetching task data'
        task_data = []
        task_list = Task.objects.all()
        for task in task_list:
            task_dict = {}
            task_dict['id']=task.id
            task_dict['title'] = task.title
            task_dict['person'] = task.person.id
            task_data.append(task_dict)

        return Response({"results":task_data},status=HTTP_200_OK)

    def person_task_detail(self,request,*args,**kwargs):
        print 'inside task detail'
        person_task_data=[]
        try:
            person_data = {}
            person_id = kwargs['person_id']
            print person_id
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
                task_dict['id']=task.id
                task_dict['title']=task.title
                task_list.append(task_dict)

            print task_list    
            
            person_task_data.append(task_list)
            print '@@@@@@@@@@'
            print person_data

            return Response({"results":person_task_data},status=HTTP_200_OK)
        except:
            return Response({"message":"Something went wrong"},status=HTTP_400_BAD_REQUEST)


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]

class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)






 



