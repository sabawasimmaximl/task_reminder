from django.contrib import admin

# Register your models here.
from models import Task,Person,Notification
admin.site.register(Person)
admin.site.register(Task)
admin.site.register(Notification)
