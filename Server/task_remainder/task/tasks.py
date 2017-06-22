import datetime
import os
from celery import Celery
from django.apps import apps, AppConfig
from django.conf import settings

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "task_remainder.settings")
settings.configure()

app=Celery('tasks',broker="redis://localhost")
from models import Notification


@app.task
def notification(user,reminder_time):
    msg="Your task has been created.."
    notification=Notification(time_created=reminder_time,message=message,person=user)
    notification.save()
    return notification



