# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Birthday(models.Model):
    event_name = models.CharField(max_length=100)
    event_start= models.DateField()
    event_end = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


