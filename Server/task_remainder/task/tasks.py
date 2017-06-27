from celery import Celery
app = Celery('task_remainder',backend="redis://localhost",broker="redis://localhost")
from models import Notification
import datetime
import time

# websocket
from ws4redis.publisher import RedisPublisher
from ws4redis.redis_store import RedisMessage
#  message sending to logged in user
from ws4redis.redis_store import SELF  

@app.task
def create_notification(reminder_time,user,task_title):
    msg="Hey {} !! Here is a task - {}".format(user.user.username,task_title)
    notification=Notification.objects.create(time_created=reminder_time,message=msg,person=user)
    redis_publisher = RedisPublisher(facility='notifications', broadcast=True)
    # the message is sent to the person subscribed to a particular notificationId channel
    # redis_publisher = RedisPublisher(facility=notifications, users=[SELF])

    message = RedisMessage('Hello')
    redis_publisher.publish_message(message) 

    return notification