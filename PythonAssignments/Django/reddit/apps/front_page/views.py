# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

#OUR CONTROLLER!


def index(request):
    print ('*'*100)
    return render(request, 'front_page/index.html')
    # return HttpResponse('This is the front page')