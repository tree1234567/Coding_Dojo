function poorKenny(){
    var x = (Math.random()*100 + 1);
    console.log(x);
    if (x < 10){
        console.log("Volcano");
    }
    if (x < 15){
        console.log("Tsunami")
    }
    if (x < 20){
        console.log("Earthquake")
    }
    if (x < 25 ){
        console.log("Blizzard")
    }
    if (x < 30){
        console.log("Meteor Strike")
    }

}
