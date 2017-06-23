from celery import Celery
from django.conf import settings
import os
import django

settings.configure()
django.setup()

app = Celery('celery_task', backend='redis://localhost')

from models import Notification

@app.task
def notification(user,reminder_time):
    msg="Your task has been created.."
    notification=Notification(time_created=reminder_time,message=message,person=user)
    notification.save()
    return notification