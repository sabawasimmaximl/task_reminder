from celeryconf import app
# from models import Notification

@app.task
def sum(x,y):
    return x + y

# @app.task
# def create_notification(user_id):
#     print 'inside create notification'
#     notification=Notification.objects.create(person_id=user_id)
#     return notification