# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import string
from random import choice
count = 0

def index(request):
    if request.method == 'POST':
        random_word = ""
        
        print"everytime"
        print count + 1 
        alphabet = string.letters
        for letter in range(13):
            random_word += choice(alphabet)
        words = {'word': random_word}
        return render(request, 'random_word_generator/index.html', words)
    return render(request, 'random_word_generator/index.html' ) 