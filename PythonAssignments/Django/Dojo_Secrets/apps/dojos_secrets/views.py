# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

from .models import User

from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'dojos_secrets/index.html')

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

        if register_result[0] == True:
            request.session['first_name'] = register_result[1]
            request.session['user_id']  = register_result[2]
            return redirect('/secrets')

            
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
            request.session['first_name'] = login_result[2]
            request.session['user_id'] = login_result[3]
            print request.session['first_name']
            print request.session['user_id']

            # request.session['last_name']  = request.POST['last_name']
            return redirect('/secrets')


        if login_result[0] == False:
            for message in login_result[1]: 
                messages.add_message(request, messages.ERROR, message )
            return redirect('/')


def main_page(request):
    
    
    return render(request, 'dojos_secrets/secrets.html')