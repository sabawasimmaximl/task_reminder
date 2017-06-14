from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone



class Task(models.Model):
    title 			= models.CharField(max_length=50, default="")
    description 	= models.CharField(max_length=500)
    created_by 		= models.ForeignKey(User, related_name="owner")
    created_time 	= models.DateTimeField(editable=False, auto_now= True)
    modified_time 	= models.DateTimeField(null=True, blank=True)

    # This method is for updating created and modified times on Saving an object
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Task, self).save(*args, **kwargs)

