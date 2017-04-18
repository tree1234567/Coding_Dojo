# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User

from django.contrib import messages

def index(request):
    return render(request, 'login_n_registration/index.html')

def register(request):
    if request.method == 'POST':
        user_dict = {
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'password': request.POST['password'],
            'confirm_password': request.POST['confirm_password']            
            }
        register_result = User.userManager.register(user_dict)

        if register_result == True:
            request.session['first_name'] = request.POST['first_name']
            request.session['last_name']  = request.POST['last_name']

            return render(request, 'login_n_registration/success.html')

            
        elif register_result[0] == False:
            for message in register_result[1]:
                messages.add_message(request, messages.ERROR, message)
            return redirect('/')



    return redirect('/')

def login(request):
    if request.method == 'POST':
        user_dict = {
            'email': request.POST['email'],
            'password': request.POST['password']
        }
        login_result = User.userManager.login(user_dict)

        if login_result[0] == True:
            # request.session['first_name'] = request.POST['first_name']
            # request.session['last_name']  = request.POST['last_name']
            return render(request, 'login_n_registration/success.html' )


        if login_result[0] == False:
            for message in login_result[1]:
                messages.add_message(request, messages.ERROR, message )
            return redirect('/')
