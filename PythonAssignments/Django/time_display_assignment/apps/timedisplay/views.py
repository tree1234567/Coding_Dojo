# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

from datetime import datetime

def index(request):
    context={
        'time': datetime.now()
    }
    return render(request, 'timedisplay/index.html', context)