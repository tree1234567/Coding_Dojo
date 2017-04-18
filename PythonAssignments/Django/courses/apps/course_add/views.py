# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

from models import Class

def index(request):
    context={
        'classes': Class.objects.all()
    }
    return render(request, 'course_add/index.html',context)

def add_course(request):
    print request.POST['course_name']
    print request.POST['description']
    
    Class.objects.create(course_name= request.POST['course_name'], course_description=request.POST['description'])
    
    
    return redirect('/')

def course_remove(request, id):
    
    context={
        'class':Class.objects.get(id=id)
    }
    return render(request,'course_add/remove.html', context)

def class_removal(request, id):
    if request.method == "POST":
        if request.POST['delete'] == 'true':
            print 'yay'
            Class.objects.get(id=id).delete()
            return redirect('/')
            
        if request.POST['delete'] == 'false':
            print 'yay'
            return redirect('/')



    return redirect('/')

