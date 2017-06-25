from ws4redis.publisher import RedisPublisher
from ws4redis.redis_store import RedisMessage
#  message sending to logged in user
from ws4redis.redis_store import SELF
from django.contrib.auth.models import User      
from rest_framework.response import Response