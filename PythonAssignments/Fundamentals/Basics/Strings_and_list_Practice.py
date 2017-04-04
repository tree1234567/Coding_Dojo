
str = "It's thanksgiving day. It's my birthday,too!"
print str.replace(" day", " month")


x = [2,54,-2,7,12,98]
print "The Max is ", max(x)
print "The Min is ", min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0], x[len(x)-1]

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
first_list = x[0:len(x)/2]
second_list = x[len(x)/2:]
print first_list, second_list
second_list.insert(0, first_list)
print second_list
