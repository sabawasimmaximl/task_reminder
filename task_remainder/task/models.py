from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Person(models.Model):
    user    = models.ForeignKey(User)
    
    def __unicode__(self):
    	return self.user.username

    class Meta:
    	app_label="task"
    		

class Task(models.Model):
    title           = models.CharField(max_length=50, default="")
    # reminder_time   = models.TimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS")
    person          = models.ForeignKey(Person,related_name="task_user")

    def __unicode__(self):
        return "Task is {}".format(self.title)

    class Meta:
        app_label="task"
        db_table="task" 
    
