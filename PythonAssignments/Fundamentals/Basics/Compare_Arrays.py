def CompareArrays():
    if set(list_one) == set(list_two):
        print("Lists are the same")
    else:
        print("Lists are different")







list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
CompareArrays()

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
CompareArrays()

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
CompareArrays()

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
CompareArrays()

