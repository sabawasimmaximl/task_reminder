from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework import generics
from models import Task, UserDetail, TaskReminderSystem

from django.utils import timezone

from serializers import TaskSerializer

class TaskApiView(ModelViewSet):eee
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
            task_dict['related_user']=task.related_user.username
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

            task_instance = Task.objects.create(title=title,reminder_time=reminder_time)
            for user_id in related_user_list:
                try:
                    related_user_instance = UserDetail.objects.get(id=user_id)
                    TaskReminderSystem.objects.create(task=task_instance,related_user=related_user_instance)
                except:
                    pass
            return Response(status=HTTP_200_OK)

        except:
            return  Response(status=HTTP_400_BAD_REQUEST)

    



