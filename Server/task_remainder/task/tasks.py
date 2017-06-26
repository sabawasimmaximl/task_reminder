from celery import Celery
app = Celery('task_remainder',backend="redis://localhost",broker="redis://localhost")
from models import Notification
import datetime
import time

@app.task
def create_notification(reminder_time,user,task_title):
    msg="Hey {} !! Here is a task - {}".format(user.user.username,task_title)
    notification=Notification.objects.create(time_created=reminder_time,message=msg,person=user)
    return notification