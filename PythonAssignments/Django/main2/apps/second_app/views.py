# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    context = {
        'email':'blob@gmail.com',
        'name': 'mike'
    }
    
    return render(request, 'second_app/index.html', context)

def show(request,id):
    context = {
        'id': id
    }
    return render(request, 'second_app/show.html', context)


