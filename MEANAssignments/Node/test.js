// console.log("I am running from node!");


// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

// x.push(100)
// x.push( ["hello", "world", "JavaScript is Fun"])
// for(var i=0; i< x.length; i=i+1){
//     console.log(x[i])
// }

// awesome();
// function awesome() {
//   console.log("too good to be true");
// }

// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);



function runningLogger(){
    return "I am running!"
}
// runningLogger()


function multiplybyTen(num){
    // console.log(num)
    return num *10
}


// console.log(multiplybyTen(5))


// function caller(someParam){
//     if ( typeof(someParam) == 'function' ){
//         someParam();
//     }
// }

// caller(multiplybyTen(5))


function myDoubleConsoleLog(param1,param2){
    if (typeof param1 == 'function'){
        console.log(param1());
    }
    if (typeof param2 == 'function'){
        console.log(param2());
    }
}


// myDoubleConsoleLog(function(){
//     console.log('what is up?')
// },5)

// function caller2(param){
//     console.log('starting')
//     setTimeout(function(){
//         console.log(typeof param)
//         if (typeof param === 'function'){
//             console.log(param(10));
//         }
//     },2000)
//     console.log("all done?")
//     return 'interesting!'
// }


// console.log(caller2(multiplybyTen));


var person = {
    name: "Armando",
    distance_traveled : 0,
    say_mah_name: function(){
        console.log(person.name);
    },
    say_stuff : function(stuff_ta_say){
        console.log(person.name + ' says: ' + stuff_ta_say);
        return person
    },
    walk : function(){
        console.log(person.name + " just walked!")
        person.distance_traveled +=3;
        return person;
    },
    run : function(){
        console.log( person.name + ' just ran!')
        person.distance_traveled +=10;
        return person;
    },
    chewgum : function(){
        console.log(person.name + " can walk and chew gum! Just not at the same time! ")
        
    }
}


var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength3 = materials.map(material => material.length); // [8,6,7,9]

console.log(materialsLength3)















