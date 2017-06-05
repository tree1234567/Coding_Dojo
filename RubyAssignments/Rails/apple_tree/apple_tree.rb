class Appletree
    attr_accessor :age
    attr_reader :height, :apples

    def initialize age
        @age = age
        @height = 1.0
        @apples = 0
    end
    def  year_gone_by
        @age += 1
        @height += (@height*0.1)
        if age > 3 && age < 10 
            @apples += 2
        else
            @apples += 0
        end

    end
    def pick_apples
        @apples = 0
    end


end