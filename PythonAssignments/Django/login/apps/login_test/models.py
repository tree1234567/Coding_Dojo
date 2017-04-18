# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class UserManager(models.Manager):
    def login(self, email, password):
        print ('login logic here')
        print('if successful login occurs passs back a tuple with(True, user)')
        print ('if not successful return a tuple with (False, user')
        pass

    def register(self, **kwargs):
        print ('register login here')
        print ('if successful login occurs pass back a tupple with (True, user)')
        print ('if login not successulf return back a tuple with (False, user)')
        pass





class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    userManager = UserManager()


