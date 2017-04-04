# Create a new class called Bike with the following properties/attributes:

# price
# max_speed
# miles
# Create 3 instances of the Bike class.

# Use the __init__() function to specify the price and max_speed of each instance (e.g. bike1 = Bike(200, "25mph"); In the __init__() also write the code so that the initial miles is set to be 0 whenever a new instance is created.

# Add the following functions to this class:

# displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
# ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
# reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
# Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().

# What would you do to prevent the instance from having negative miles?

# Which methods can return self in order to allow chaining methods?

from time import sleep

class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    
    def display_info(self):
        print self.price, self.max_speed, self.miles
    
    def ride(self):
        self.miles += 10
        print "Mileage is now:", self.miles
    
    def reverse(self):
        print "Reversing"
        sleep(5)
        self.miles -= 5
        print "Milage is now:", self.miles
        



tricycle = Bike("$100","30mph", 0)
tricycle.ride()
tricycle.ride()
tricycle.reverse()
print(tricycle.display_info())