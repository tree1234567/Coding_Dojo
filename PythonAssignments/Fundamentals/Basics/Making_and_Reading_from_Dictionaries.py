my_dict = {"name":"anna", "age":"101", "country":"The United States", "favoriteLanguage": "Python"}

def myintroduction(arg):
    print "My name is " + my_dict["name"]
    print "My age is " + my_dict["age"]
    print "My country of birth is " + my_dict["country"]
    print "My favorite language is " + my_dict["favoriteLanguage"]

myintroduction(my_dict)