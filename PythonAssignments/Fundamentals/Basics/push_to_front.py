arr = [1,2,3,4,5]

def push_to_front(arr, val):
    arr.append(val)
    for index in reversed(arr):
        print index
        try:
            arr[index], arr[index-1] = arr[index-1], arr[index]
            print arr
        except:
            pass

    return arr


    

print(push_to_front(arr, 8))

# def simpleArraySum(n, ar):
#     result = 0
#     for x in range(n:
#         result += x
#     return result





