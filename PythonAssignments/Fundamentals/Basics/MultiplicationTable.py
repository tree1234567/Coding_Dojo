# Create program that prints multiplication table in your console.
print("x",range(1,13))
for x in range(1,13):
    lst = []
    for num in range(1,13):
        new_list = x * num
        lst.append(new_list)
    
    print lst