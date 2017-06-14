from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from models import Task,UserProfile

from django.utils import timezone

from serializers import TaskSerializer,UserRegisterSerializer,UserLoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

class TaskApiView(ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def list(self,request,*args,**kwargs):
        task_data = []
        task_instance = Task.objects.all()
        for task in task_instance:
            task_dict = {}
            task_dict['id']=task.id
            task_dict['title'] = task.title
            task_dict['related_user']=task.related_user
            task_dict['reminder_time']=task.reminder_time
            task_data.append(task_dict)

        return Response({"results":task_data},status=HTTP_200_OK)

    # users created task here 
    def create_new_task(self,request,*args,**kwargs):
        print 'inside create new task'
        try:
            title = request.POST['title']
            reminder_time = request.POST['reminder_time']
            related_user_list = request.POST.get('related_user')
            related_user_list = json.loads(related_user_list)
            for user_id in related_user_list:
                try:
                    related_user_instance = UserProfile.objects.get(id=user_id)
                    Task.objects.create(title=title,reminder_time=reminder_time,related_user=related_user_instance)
                except:
                    pass
            
            return Response({"message":"task created"},status=HTTP_200_OK)

        except:
            return  Response(status=HTTP_400_BAD_REQUEST)

    def task_detail(self,request,*args,**kwargs):
        print 'inside task detail'
        try:
            task_data = {}
            task_id = kwargs['task_id']
            task_instance = tasks.objects.get(id=task_id)
            task_data['id']=task_instance.id
            task_data['title']= task_instance.title
            task_data['reminder_time']= task_instance.reminder_time
            task_reminder_instance= Task.objects.filter(task=task_instance)
            related_user_list = []
            for user in task_reminder_instance:
                user_data = {}
                user_data['pk'] = user.user_id
                user_data['name'] = user.user.username
                related_user_list.append(user_data)
            task_data['related_user']= related_user_list

            return Response({"results":task_data},status=HTTP_200_OK)
        except:
            return Response(status=HTTP_400_BAD_REQUEST)
             

class RegisterApiView(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]


    def create_new_user(self,request,*args,**kwargs):
        username=request.POST['username']
        password=request.POST['password']
        djangouser = User(username=username)
        djangouser.set_password(password) 
        try:
            djangouser.save()
        except Exception as e:
            print "error occured {}".format(e)

        new_user=UserProfile()

        user = authenticate(username=username, password=password)
        ## user has been added to the current session
        new_user.user = djangouser
        new_user.save()

        login(request,user)

        new_user.save()

        # redirecting to Login page
        return Response({"message":"sucess","registered_user":new_user},status=HTTP_200_OK)




class LoginApiView(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserLoginSerializer
    permission_classes = [permissions.AllowAny]

    def login(self,request,*args,**kwargs):
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            user=UserProfile.objects.get(user=user)
            # redirecting to dashboard
            return Response({"message":"success","authenticated_user":user},status=HTTP_200_OK)

        else:
            return Response(status=HTTP_400_BAD_REQUEST)
               
       







 



