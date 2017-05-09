# Create a file mammal.rb. In this file, create a Mammal Class. A mammal should have a default health attribute with value of 150. Also add a method called display_health, which when invoked, prints the health of the Mammal.

class Mammal 
    attr_accessor :health
    def initialize
        @health = 150
    end 
    def display_health
        puts @health
        self
    end
end

# create a class called Dog that inherits from the Mammal class and do the following:
    
# Default health of 150 (inherited) 

# A method called pet, which when invoked, increases the health by 5 

# A method called walk, which when invoked, decreases the health by 1

# A method called run, which when invoked, decreases the health by 10 

# A method called display_health (inherited) 

# Have an instance of the Dog class walk 3 times, run twice, pet once and then display its health
class Dog < Mammal
    def walk
        @health-=1
        self
        
    end
    def run
        @health -= 10
        self
    end
    def pet
        @health += 5
        self
    end
end
 
sparky= Dog.new.walk.walk.walk.run.run.pet.display_health

# create a class called Lion that inherits from the Mammal class and do the following:

# Have the default health be 170 

# Add a new method called fly, which when invoked, decreases the health by 10.

# Add a new method called attack_town, which when invoked, decreases the health by 50. 

# Add a new method called eat_humans, which when invoked, increases the health by 20. 

# Have the Lion attack_town three times, eat_humans twice, fly twice, and have it display its health. When the Lion's display_health method is called have it say 'This is a lion` before it displays the default information (make sure you still call the parent's display_health function).

class Lion < Mammal
    def initialize
        @health = 170
    end

    def fly
        @health -=10
        self
    end
    def attack_town
        @health -= 50
        self
    end
    def eat_humans
        @health += 20
        self
    end
end

lion = Lion.new.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.display_health


