# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from .models import Blog, Comment

def index(request):
    context = {
        'blogs': Blog.objects.all()
        
    }
    return render(request, 'test_app/index.html', context)


def blogs(request):
    #use the ORM!!! WOOOOO
    Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
    #OOOOORRRRR insert into blogs(title, blog, created_at, updated_at) values (title, blog, NOW(), NOW())
    return redirect('/')

def comments(request, id):
    if request.method == 'POST':
        blog = Blog.objects.get(id=id)
        Comment.objects.create(comment=request.POST['comment'], blog=blog)
    return redirect('/')
    
    