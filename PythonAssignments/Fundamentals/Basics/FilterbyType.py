# Assignment: Filter by Type
# Write a program that, given some value, tests that value for its type. Here's what you should do for each type:

# Integer
# If the integer is greater than or equal to 100 print "That's a big number!" If the integer is less than 100 print "That's a small number"

# String
# If the string is less than or equal to 50 characters print "Long sentence." If the string is shorter than 50 characters print "Short sentence."

# List
# If the length of the list is greater than or equal to 10 print "Big list!" If the list has fewer than 10 values print "Short list."

# Test your program using these examples:

x = [1,2,3,3,3,3,3,3,3,3]

def TypeChecker(args):
    if isinstance(args, int):
        if args >= 100: 
            print("Thats a big number")
        else: print("Thats a small number")

    if isinstance(args, str):
        if len(args) < 50: 
            print("Small String")
        else: print("Long String")

    if isinstance(args, list):
        if len(args) > 10:
            print("Big List!")
        else: print("Small List.")

TypeChecker(x)