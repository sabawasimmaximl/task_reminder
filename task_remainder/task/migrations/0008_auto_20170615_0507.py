# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-06-15 05:07
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0007_auto_20170614_1332'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.AlterField(
            model_name='task',
            name='related_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='task_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
