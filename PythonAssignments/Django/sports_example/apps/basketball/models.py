# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models




class Team(models.Model):
    team_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #lineup
    

class Coach(models.Model):
    coach_name = models.CharField(max_length=50)
    team = models.ForeignKey(Team)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Player(models.Model):
    player_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #positions


class Lineup(models.Model):
    lineup_name = models.CharField(max_length=50)
    team = models.ForeignKey(Team, related_name='lineup')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #positions

class Position(models.Model):
    position_name = models.CharField(max_length=50)
    player = models.ForeignKey(Player, related_name = 'positions')
    lineup = models.ForeignKey(Lineup)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    


# class Supervisor(models.Model):
#     coach = models.ForeignKey(Coach)
#     manager = models.ForeignKey(Coach)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True) 
