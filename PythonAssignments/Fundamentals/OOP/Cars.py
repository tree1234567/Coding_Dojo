# Create a class called  Car. In the__init__(), allow the user to specify the following attributes: price, speed, fuel, mileage. If the price is greater than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%. 

# Create six different instances of the class Car. In the class have a method called display_all() that returns all the information about the car as a string. In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.

class Car(object):
    def __init__(self,price, speed, fuel, milage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.milage= milage
        if self.price >= 10000:
            self.tax = '15%'
        else:
            self.tax =  "12%"
    
    def display_all(self):
        print "Price of the car", "is $",self.price, "Max speed:",self.speed, "The fuel is:",self.fuel,"There is a milage of:",self.milage, "The tax is:",self.tax

mazda = Car(10001, "145mph", "full", 12500)
mazda.display_all()
ford = Car(9000, "120mph","empty", 3000)
ford.display_all()

