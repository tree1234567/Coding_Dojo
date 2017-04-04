# Create an Animal class and give it the below attributes and methods. Extend the Animal class to two child classes, Dog and Dragon


class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    
    def walk(self):
        self.health = self.health -1
        return self

    def run(self):
        self.health = self.health -5
        return self

    def display_health(self):
        print self.name
        print self.health

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    
    def pet(self):
        self.health = self.health + 5
        return self
    
class Dragon(Animal):
    def __init__(self,name):
        super(Dragon, self).__init__(name)
        self.health = 170
    
    def fly(self):
        self.health = self.health - 10
        return self
    
    def DRAGON(self):
        print("ITS A DRAGON")
        display_health()


sparky = Dog("Sparky")
sparky.walk().walk().walk().run().run().pet().display_health()

drogon = Dragon("Drogon")
drogon.walk().walk().walk().run().run().fly().fly().display_health()

