from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class UserDetail(models.Model):
	user 			=models.ForeignKey(User,related_name="user")

	def __unicode__(self):
		return self.user.username


class Task(models.Model):
    title 			= models.CharField(max_length=50, default="")
    reminder_time	= models.TimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS")
   

    def __unicode__(self):
    	return "Task is {}".format(self.title)

    class Meta:
    	app_label="task"
    	db_table="task"	


class TaskReminderSystem(models.Model):
	task  			= models.ForeignKey(Task,related_name="task")
	related_user    = models.ForeignKey(UserDetail,related_name="user_doing_task")

	def __unicode__(self):
		return self.task.title
