from django.contrib import admin

# Register your models here.
from models import Task,Person
admin.site.register(Person)
admin.site.register(Task)
