# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    print 'route 1'
    return render(request, 'vinmymvc/index.html')

def show(request):
    print 'route 2'
    return render(request, 'vinmyMVC/show_users.html')


def new_user(request):
    print request
    if request.method == 'POST':
        print ("*"*50)
        print (request.POST)
        request.session['name']= request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')