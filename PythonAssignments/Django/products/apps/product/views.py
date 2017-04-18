# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from models import Product

def index(request):
    context = {
        'products': Product.objects.all(),
    }
    return render(request, 'product/index.html', context)