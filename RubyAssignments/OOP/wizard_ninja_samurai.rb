# Wizard should have a default health of 50 and intelligence of 25

# Wizard should have a method called heal, which when invoked, heals the Wizard by 10 

# Wizard should have a method called fireball, which when invoked, decrease the health of whichever object it attacked by 20 

# Ninja should have a default stealth of 175

# Ninja should have a steal method which, when invoked, attacks an object and increases the Ninjas health by 10 

# Ninja should have a get_away method which, when invoked, decreases its health by 15 

# Samurai should have a default health of 200 

# Samurai should have method called death_blow, which when invoked, attacks an object and decreases its health to 0 

# Samurai should have a method called meditate, which when invoked, heals the Samurai back to full health 

# Samurai should have a class method called how_many, which when invoked, displays how many Samurai's there are
class Human
    attr_accessor :health, :strength, :intelligence, :stealth 
    def initialize
        @strength = 3
        @stealth = 3
        @intelligence =3
        @health = 100
    end

    def show_health
        puts @health
        self
    end

    def attack(object)
        object.health -= 10
    end
end


class Wizard < Human
    def initialize
        super
        @health = 50
        @intelligence = 25

    end

    def heal
        @health += 10
        self
    end

    def fireball(object)
        object.health -= 20
        self
    end

end

class Ninja < Human

    def initialize
        super
        @stealth = 175
    end

    def steal(object)
        attack(object)
        @health += 10
        self
    end
    def get_away
        @health -=15
        self
    end

end


class Samurai < Human
    @@how_many = 0
    def initialize
        super
        @health = 200
        @@how_many +=1
    end

    def death_blow(object)
        object.health = 0
        self
    end
    def meditate
        if @health != 200
            @health = 200
        end
        self
    end 
    def how_many
        puts @@how_many
    end
end  

bob = Human.new
rick = Samurai.new.death_blow(bob)
morty = Samurai.new
morty.how_many

bob.attack(rick)

rick.show_health
rick.meditate
rick.show_health

bob.show_health