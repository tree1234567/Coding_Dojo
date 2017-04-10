# You're creating a program for a call center. Every time a call comes in you need a way to track that call. One of your program's requirements is to store calls in a queue while callers wait to speak with a call center employee.

# You will create two classes. One class should be Call, the other CallCenter.

# Call():
# Create your call class with an init method. Each instance of Call() should have a few attributes:

# unique id

# caller name

# caller phone number

# time of call

# reason for call

# The call class should have a display method that prints all call attributes.

# CallCenter():
# Create you call center class with an init method. Each instance of CallCenter() should have the following attributes:

# calls: should be a list of call objects

# queue size: should be the length of the call list

# The call center class should have an add method that adds a new to the end of the call list

# The call center class should have a remove method that removes the call from the beginning of the list (index 0).

# The call center class should have a method called info that shows the name and phone number for each call in the queue as well as the length of the queue.

# You should be able to test your code to prove that it works. Remember to build one piece at a time and test as you go for easier debugging!




class Call(object):

    def __init__(self, ID, caller_name, caller_number, caller_time, caller_reason):

        self.id= ID 
        self.caller_name = caller_name
        self.caller_number = caller_number
        self.caller_time = caller_time
        self.caller_reason = caller_reason
        return None

    def caller_info(self):
        print "Caller ID:", self.id, "| Caller Name:", self.caller_name, "| Phone Number:", self.caller_number, "| Time of Call:", self.caller_time, "| Reason for Call:", self.caller_reason


class CallCenter(object):

    def __init__(self,*args):
        self.caller_list = []
        for arg in args:
            self.caller_list.append(arg)
        return None

    def que(self):
        print "Caller Length is ", len(self.caller_list)
        return self

    def add_caller(self,new_caller):
        self.caller_list.append(new_caller)
        return self

    def remove_caller(self):
        del(self.caller_list[0])
        return self
    
    def caller_info(self):
        for call in self.caller_list:
            print call.caller_name, call.caller_number
        return self

    def remove_caller(self, number):
        counter = 0
        for call in self.caller_list:
            if call.caller_number == number:
                print "it worked"
                print call.caller_number, "and the matched parameter", number
                del self.caller_list[counter]
            counter += 1
        return self


person = Call(4,"Jack", "954-215-3232", "12:43", "SHITS BROKEN YO")
person2 = Call(2, "Park", "323-213-3232", "2:12", "Help")
person3 = Call(3, "Jerry", "331-212-3232", "2:12", "STOP")
person4 = Call(1, "Super", "954-321-3232", "2:12", "FUCK")

Center = CallCenter(person, person2, person3,person4).que()

person5 = Call(1, "Mary", "954-321-3232", "2:12", "FUCK")

# Center.add_caller(person5).que()

# Center.caller_info()

Center.remove_caller("954-321-3232").caller_info()


