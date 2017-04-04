def oddeven():
    for num in range(1,2001):
        if num % 2 == 0:
            print ("Number is " + str(num) + " this is an even number")
        else:
            print ("Number is " + str(num) + " this is an odd number")


a = [2,4,5]
def multiplybyfive (lst,num):
    # for x in range(0,len(lst)):
    #     lst[x] *= num
    lst = [item * num for item in lst]
    print(lst)
    return lst
    

multiplybyfive(a,5)

def layered_multiples(lst):
    new_array = []
    for item in lst:
        count = 0
        temp_array = []
        for x in range(item):
            temp_array.append(1)
        new_array.append(temp_array)
    print(new_array)

layered_multiples(multiplybyfive(a,5))