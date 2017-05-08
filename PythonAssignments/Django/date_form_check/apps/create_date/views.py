# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import *
from datetime import datetime

def index(request):
    context = {
        'dates':  Birthday.objects.all()
    }
    return render(request, 'create_date/index.html', context)

#datetime_object = datetime.strptime(start, '%Y-%m-%dT%H:%M') 
# for time and date from input! datetime-local

def date_check(request):
    if request.method == "POST":
        start = request.POST['start']
        end = request.POST['end']
        
        datetime_obj_start = datetime.strptime(start, '%Y-%m-%d')
        datetime_obj_end = datetime.strptime(end, '%Y-%m-%d')

        if datetime_obj_start < datetime_obj_end and datetime_obj_start >= datetime.now() :
            Birthday.objects.create(event_name='Please Work number2', event_start=datetime_obj_start, event_end=datetime_obj_end)
        
        else:
            print 'didnt work'

        
    return redirect("create_date:index")
