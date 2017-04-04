from turtle import *

import random

speed(0)

bgcolor('black')

x = 1
r = random.randint(0,255)
g = random.randint(0,255)
b = random.randint(0,255)
while x < 400:
    r = random.randint(0,255)
    g = random.randint(0,255)
    b = random.randint(0,255)

    colormode(255)
    pencolor(r,g,b)

    fd(50 + x)
    rt(75.5)


    x = x+3

exitonclick() 
