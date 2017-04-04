#Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character.

l = ['hello','world','my','name','is','Anna']

def FindChar(list,char):
    newArray=[]
    for item in list:
        for letter in item:
            if char in item and char==letter:
                newArray.append(item)
    print(newArray) 
                

FindChar(l, "o")