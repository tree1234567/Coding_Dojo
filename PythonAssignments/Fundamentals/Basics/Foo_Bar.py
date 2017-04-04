# Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.

# For all numbers between 100 and 10000 test that number for whether it is prime or a perfect square. If it is a prime number print "Foo". If it is a perfect square print "Bar". If it is neither print "FooBar". Do not use the python math library for this exercise. For example, if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar".
# for item in range(100,100000):

def sqrt():
    for num in range(100,1001):
        answer = 0
        # if all(num % i for i in range(2,num)):
        count = 2
        for i in range(2, num+1):
            if num % i == 0:
                break
            if i == num-1:
                print num, "is prime", "foo"
        
        while answer * answer < num: 
            answer = answer + 1
        if answer * answer != num:
            continue
        else: 
            print "Root:",answer, " -- Perfect Square num:",num,"Bar"
            continue

sqrt()
