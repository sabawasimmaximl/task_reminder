from celeryconf import app
from models import Notification

@app.task
def create_notification(user_id):
    notification=Notification.objects.create(person_id=user_id)
    return notification