from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from models import Task
import json

from django.utils import timezone

from .serializers import (
    UserCreateSerializer,
    UserLoginSerializer,
    TaskSerializer
    )
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout


from django.db.models import Q
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

class TaskCreateApiView(CreateAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[permissions.AllowAny]


class TaskListApiView(ListAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[permissions.AllowAny]


    def perform_create(self,serializer):
        serializer.save(related_user=self.request.user.username)


    def list(self,request):
        queryset=self.get_queryset()
        serializer=TaskSerializer(queryset,many=True)
        return Response({"task_data":serializer.data})    


class TaskDetailApiView(RetrieveAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
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








 



