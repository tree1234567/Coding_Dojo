# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    return render(request, 'tmnt/index.html')

def ninjas(request,ninja_color):

    if ninja_color == '':
        ninja ='tmnt.png'

    elif ninja_color == 'blue':
        ninja = 'leonardo.jpg'

    elif ninja_color == 'purple':
        ninja = 'donatello.jpg'

    elif ninja_color == 'orange':
        ninja = 'michelangelo.jpg'

    elif ninja_color == 'red':
        ninja = 'raphael.jpg'

    else:
        ninja = 'notapril.jpg'

    context = {
        'ninja': ninja
    }
    
    return render(request, 'tmnt/ninjas.html', context)
