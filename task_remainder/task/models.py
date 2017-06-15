from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
    

class Task(models.Model):
    title           = models.CharField(max_length=50, default="")
    reminder_time   = models.TimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS")
    related_user    = models.ForeignKey(User,related_name="task_user")

    def __unicode__(self):
        return "Task is {}".format(self.title)

    class Meta:
        app_label="task"
        db_table="task" 
    
