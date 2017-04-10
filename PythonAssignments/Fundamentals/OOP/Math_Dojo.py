# HINT: To do this exercise, you will probably have to use 'return self'. If the method returns itself (an instance of itself), we can chain methods.

# PART I
# Create a Python class called MathDojo that has the methods add and subtract. Have these 2 functions take at least 1 parameter.

# PART II
# Modify MathDojo to take at least one integer(s) and/or list(s) as a parameter with any number of values passed into the list. 

# PART III
# Make any needed changes in MathDojo in order to support tuples of values in addition to lists and singletons.


class MathDojo(object):
    def __init__(self):
        self.num = 0
        return None        
        
    def add(self,*args):
        self.addition= []
        for arg in args:
            if isinstance(arg, list):
                for item in arg:
                    item = int(item)
                    self.num += item
            
            elif isinstance(arg, tuple):
                for item in arg:
                    item = int(item)
                    self.num += item

            else:
                self.addition.append(arg)
                for number in self.addition:
                    self.num += number
        return self

    def sub(self,*args):
        self.subtraction = []
        for arg in args:
            if isinstance(arg, list): #unpacks a list.
                for item in arg:
                    item = int(item)
                    self.num -= item
            
            elif isinstance(arg, tuple):
                for item in arg:
                    item = int(item)
                    self.num -= item


            else:
                self.subtraction.append(arg) #unpacks args into list then subtracts from total.
                for number in self.subtraction:
                    self.num -= number
        return self


    def result(self):
        print self.num
        return self



working = MathDojo().add([3,4],(2,3,4),5).sub((1,2),3).result()