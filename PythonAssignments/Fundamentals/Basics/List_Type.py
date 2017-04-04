# Write a program that takes a list and prints a message for each element in the list, based on that element's data type.

# Your program input will always be a list. For each item in the list, test its data type. If the item is a string, concatenate it onto a new string. If it is a number, add it to a running sum. At the end of your program print the string, the number and an analysis of what the array contains. If it contains only one type, print that type, otherwise, print 'mixed'.

def Alltype(mylist):
    sum1 = 0
    sum2 = ""
    if all(isinstance(x, int) for x in mylist) == True:
        for x in mylist:
            sum1+=x
        print("The array you entered is string type")
        print("Sum: " + str(sum1))

    elif all(isinstance(x,str) for x in mylist) == True:
        for x in mylist:
            sum2 += x + " "
        print("The array you entered is string type")
        print ("String: " + sum2)
        
    else:
        for x in mylist:
            if type(x) == str:
                sum2 += x + " "
            if type(x) == int or type(x) == float:
                sum1 += x
        print("The array you entered is mixed type.")
        print("Sum: " + str(sum1))
        print("String: " + sum2)
    

l = ['magical unicorns',19,'hello',98.98,'world']
Alltype(l)
l = [2,3,1,7,4,12]
Alltype(l)
l = ['magical','unicorns']
Alltype(l)