import random


def gradesandscores():
    print("Scores and Grades")
    for x in range(10):
        student_grade = random.randint(1,100)
        if student_grade > 90:
            print "Score: ", student_grade, "Your grade is A"
        elif student_grade > 80:
            print "Score: ", student_grade, "Your grade is B"
        elif student_grade > 70:
            print "Score: ", student_grade, "Your grade is C"
        elif student_grade > 60:
            print "Score: ", student_grade, "Your grade is D"
        elif student_grade < 59:
            print "Dude... you failed"

gradesandscores()
