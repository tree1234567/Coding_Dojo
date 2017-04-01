var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function studentsandinstructors(obj){
    var count = 0
    for (var key in obj){
        console.log(key)
        for (var x=0; x<obj[key].length; x++){
            count +=1
            console.log(count + "-" + obj[key][x]["first_name"], obj[key][x]["last_name"] + "-"+ ((obj[key][x]["first_name"].length)+(obj[key][x]["last_name"].length)));
        }}
}