import django
from apps.basketball.models import *

def find_or_create_team(team_name):
    try:
        return Team.objects.get(team_name=team_name)
    except:
        return Team.objects.create(team_name=team_name)


def create_line_up(lineup_name, team):
    try:
        return Lineup.objects.get(lineup_name=lineup_name, team=team)
    except:
        return Lineup.objects.create(lineup_name=lineup_name, team=team)

def find_or_create_player(player_name):
    try:
        return Player.objects.get(player_name=player_name)
    except:
        return Player.objects.create(player_name=player_name)


def add_player_to_lineup(player, lineup):
    try:
        return Position.objects.get(player=player, lineup=lineup)
    except:
        return Position.objects.create(player_id=player.id, lineup_id=lineup.id)

def add_coach(coach_name, team):
    try:
        Coach.objects.get(coach_name=coach_name, team=team)
    except:
        Coach.objects.create(coach_name=coach_name, team=team)

raptors = find_or_create_team("Raptors")
bulls = find_or_create_team("Bulls")
heat = find_or_create_team("Heat")
pistons = find_or_create_team("Pistons")
celtics= find_or_create_team("Celtics")

raptors_starters = create_line_up('starters', raptors)
raptors_bench =create_line_up('bench', raptors)
bulls_starters = create_line_up('starters', bulls)
bulls_bench = create_line_up('bench', bulls)
heat_starters = create_line_up('starters', heat)
heat_bench = create_line_up('bench', heat)
pistons_starters = create_line_up('starters', pistons)
pistons_bench = create_line_up('bench', pistons)
celtics_starters = create_line_up('starters', celtics)
celtics_bench = create_line_up('bench', celtics)

jimmy_butler = find_or_create_player("Jimmy Bulter")
goran_dragic = find_or_create_player("Goran Dragic")
derrick_rose = find_or_create_player("Derrick Rose")
stephen_curry = find_or_create_player("Stephen Curry")
michael_jordan = find_or_create_player('Michael Jordan')

add_player_to_lineup(jimmy_butler,bulls_starters)
add_player_to_lineup(goran_dragic,heat_starters)
add_player_to_lineup(derrick_rose, celtics_starters)
add_player_to_lineup(stephen_curry, pistons_starters)

add_coach("Greg Popavich",bulls)
add_coach("Eric Spolstra",heat)
add_coach("Steve Kerr", pistons)
add_coach("Vince Mcmahon", celtics)

def find_players():
    for player in Team.objects.all():
        print player.team_name


