from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from models import Task,Person
import json
from django.utils import timezone

# serializers
from .serializers import (
    UserCreateSerializer,
    UserLoginSerializer,
    TaskSerializer,
    PersonSerializer,
    )

from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

from django.contrib.auth import get_user_model
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
        person =User.objects.get(id=person_id)
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

    def get(self,request):
        pass

# Person TaskApi view
class PersonTaskApiView(RetrieveAPIView):
    queryset=Person.objects.all()
    serializer_class=PersonSerializer
    permission_classes=[permissions.AllowAny]
    lookup_field="pk"     

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








 



