# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import messages
from models import *

def index(request):
    return render(request, 'user_val/index.html')


def username_valid(request):
    if request.method == "POST":
        if 16 > len(request.POST['user_name']) > 8:
            try:
                User.objects.create(username=request.POST['user_name'])
                messages.add_message(request, messages.ERROR,'Username created')
                return redirect('/')

            except:
                messages.add_message(request, messages.ERROR,'Username is already in the database')
                return redirect('/')
        else:
            messages.add_message(request, messages.ERROR,'Please make your username between 8 and 16 characters')

    return redirect('/')