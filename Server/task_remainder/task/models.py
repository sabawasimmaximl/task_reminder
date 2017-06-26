from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# websocket
from ws4redis.publisher import RedisPublisher
from ws4redis.redis_store import RedisMessage
#  message sending to logged in user
from ws4redis.redis_store import SELF    

class Person(models.Model):
    user    = models.ForeignKey(User)

    def __unicode__(self):
        return self.user.username

    class Meta:
        app_label="task"
        db_table="person_record"
            
class Task(models.Model):
    title                     = models.CharField(max_length=50, default="")
    reminder_time             = models.DateTimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS")
    person                    = models.ForeignKey(Person,related_name="task_user")

    def __unicode__(self):
        return "Task is {}".format(self.title)

    class Meta:
        app_label="task"
        db_table="task" 
        
class Notification(models.Model):
    notification_id           = models.IntegerField(primary_key=True, editable=False, blank=True)
    time_created              = models.DateTimeField(blank=True,null=True,help_text="Time format is :HH:MM:SS") 
    message                   = models.TextField(max_length=500)
    person                    = models.ForeignKey(Person,related_name="notify_user")

    def __unicode__(self):
        return self.message    
    
    class Meta:
        app_label="task"
        db_table="notification" 


    def save(self,*args,**kwargs):
        '''
        notification_id of the peroson who published the message
        '''

        if not self.notification_id :
            no = Notification.objects.count()
            if no == 0:
                self.notification_id = 1
            else:
                self.notification_id = self.__class__.objects.all().order_by("-notification_id")[0].notification_id + 1
        else:
            notification_instance = Notification.objects.get(notification_id = self.notification_id) 
            # the message is sent to the person subscribed to a particular notificationId channel
            redis_publisher = RedisPublisher(facility=notification_id, users=[SELF])

            message = RedisMessage(notification_instance)
            redis_publisher.publish_message(message)  

        super(Notification,self).save(*args,**kwargs)




