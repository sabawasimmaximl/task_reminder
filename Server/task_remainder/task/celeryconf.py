import os,sys
import django
from celery import Celery
from django.conf import settings

sys.path.append("/home/ritu/Desktop/task-reminder/task_reminder/Server/task_remainder") #Set it to the root of your project
os.environ["DJANGO_SETTINGS_MODULE"] = "task_remainder.settings"

django.setup()

app = Celery('task_remainder',broker="redis://localhost")
CELERY_TIMEZONE = 'UTC'

app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
