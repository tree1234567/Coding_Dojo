# Write a program that prints a 'checkerboard' pattern to the console.



def MakeBoard():
    for x in range(1,10):
        if x % 2 == 0:
            print(" * * * *")
        else:
            print("* * * *")


MakeBoard()