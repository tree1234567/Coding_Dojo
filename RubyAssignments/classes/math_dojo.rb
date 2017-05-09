# Create a MathDojo class that will allow you to add and subtract numbers.

# Make challenge1 work. You will need to create two methods: add and subtract. 

# These two functions should take at least 1 argument. 

# Make challenge2 work. Modify your methods so that arrays can also be passed as arguments.


class MathDojo
    attr_accessor :sum

    def initialize
        @sum = 0
    end 

    def add(*args)
        @sum += args.flatten.reduce(:+)
        self
    end

    def subtract(*args)
        @sum -= args.flatten.reduce(:+)
        self
    end
     
end

puts MathDojo.new.add(2,1,[2,3]).subtract(1,[2,[2,2],3,2]).sum
