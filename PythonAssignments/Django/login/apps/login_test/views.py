# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
from .models import User



def index(request):
    print "Running index method, calling out to User"
    user = User.userManager.login('speros@codingdojo.com', 'Speros')
    return HttpResponse("user = User.objects.login('speros@codingdojo.com', 'Speros')")