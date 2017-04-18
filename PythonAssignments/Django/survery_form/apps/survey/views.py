# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'survey/index.html')

def results(request):
    if 'count' in request.session.keys():
        request.session['count']+= 1 #bad practice pull value out of key into temp variable and then modify the temp and reinsert into key.
    else: 
        request.session['count'] = 1

    if request.method == "POST":
        
        request.session['first_name'] = request.POST['first_name']
        request.session['favorite_lang'] = request.POST['favorite_lang']
        request.session['location'] = request.POST['location']
        request.session['comment'] = request.POST['comment']

        return render(request, 'survey/results.html')
    return render(request, 'survey/results.html')