from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Person(models.Model):
    user    = models.ForeignKey(User)

    
    def __unicode__(self):
    	return self.user.username

    class Meta:
    	app_label="task"
        db_table="person_record"
    		
class Task(models.Model):
    title                     = models.CharField(max_length=50, default="")
    reminder_time             = models.TimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS")
    person                    = models.ForeignKey(Person,related_name="task_user")

    def __unicode__(self):
        return "Task is {}".format(self.title)

    class Meta:
        app_label="task"
        db_table="task" 



class Notification(models.Model):
    time_created    = models.TimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS") 
    message         = models.TextField(max_length=500)
    # person_id       = models.ForeignKey(Person,related_name="notify_user")

    def __unicode__(self):
        return self.message    
    
    class Meta:
        app_label="task"
        db_table="notification" 
