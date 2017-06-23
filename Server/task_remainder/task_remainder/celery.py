from celery import Celery

app = Celery('celery_task', backend='redis://localhost')


app.conf.update(
    result_expires=3600,
)

if __name__ == '__main__':
    app.start()