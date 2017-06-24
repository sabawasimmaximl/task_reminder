# from celeryconf import app
from celery import Celery
app = Celery('task_remainder',backend="redis://localhost",broker="redis://localhost")
from models import Notification
import datetime

@app.task
def create_notification(reminder_time,user):
    # print '############ inside celery execution###########'
    msg="Hey {} !! Your task has been created".format(user.user.username)
    notification=Notification.objects.create(time_created=reminder_time,message=msg,person=user)
    notification.save()
