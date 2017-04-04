
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def name(students):
    for dicts in students:
        iter_concat = ""
        for key,data in dicts.iteritems():
            iter_concat+= data + " "
        print(iter_concat)

name(students)
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def nameofusers(users):
    for key,val in users.iteritems():
        print(key)
        count = 0
        for val2 in val:
            iter_string = ""
            for data in val2.itervalues():
                iter_string += data + " "
            count += 1
            print count, "-",iter_string, "-",len(iter_string)

nameofusers(users)

