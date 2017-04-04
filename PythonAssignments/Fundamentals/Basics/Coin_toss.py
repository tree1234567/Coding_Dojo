import random

def coinflip():
    tails_count = 0 
    heads_count = 0
    for x in range(5001):
        num = random.randint(1,2)
        if num == 1:
            heads_count += 1
            print "Attempt #"+ str(x) + ": Throwing a coin... its a head! ... Got " + str(heads_count) + " head(s) so far and " + str(tails_count) + " tail(s) so far"
        else:
            tails_count += 1
            print "Attempt #" + str(x) + ": Throwing a coin... its a tail! ... Got " + str(heads_count)+ " head(s) so far and " + str(tails_count) + " tail(s) so far"
        
coinflip()