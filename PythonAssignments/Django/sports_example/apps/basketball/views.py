# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, reverse

from .models import *

def index(request):
    team = Team.objects.all()
    context={
        'teams': team
    }
    return render(request, 'basketball/index.html', context)


def team(request, id):
    team = Team.objects.get(id=id)
    players = Player.objects.filter(positions__lineup__team_id = id)
    lineup = Lineup.objects.filter(team_id = id)
    context ={
        'team': team,
        'players': players,
        'lineup': lineup

    }
    return render(request, 'basketball/team.html', context)

def make_team(request):
    if request.method == "POST":
        try:
            Team.objects.get(team_name=request.POST['team'])
            
        except:
            Team.objects.create(team_name=request.POST['team'])
            
    
    return redirect('basketball:index')

def make_lineup(request,id):
    if request.method == "POST":
        try:
            Lineup.objects.get(lineup_name = request.POST['new_line_up'], team_id = id)
        except:
            Lineup.objects.create(lineup_name = request.POST['new_line_up'], team_id = id)


    return redirect(reverse('basketball:team', kwargs={'id':id }))