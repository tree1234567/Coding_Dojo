function drawLeftStars(num){
    var askString = "";
    for (var i = 0; i <= num; i++) {
        askString += "*";
    }
    console.log(askString);
}



function drawRightStars(num) {
    var addStars = "";
    var counter = 0;
    if (num > 75 || num < 0) {
        console.log("Num too high");
}   else {
        for (var i = 0; i <= 75 - num; i++) {
            addStars +=" ";
            if (i == 75 - num) {
            while (counter <= num) {
                counter++;
                addStars +="*";
}
}
}
}
console.log(addStars);
return addStars;
}

function drawCenteredStars(num) {
    var addStars = "";
    var counter = 0;
    var counter2 = 0;
    for (var i = 0; i <= Math.floor((75 - num)/2); i++){
        addStars += " ";
        if (i == Math.floor((75 - num)/2)) {
            while (counter < num) {
                counter++;
        addStars += "*";
        if (counter == num) {
            while (counter2 < (75 - i - counter)) {
                counter2++;
                addStars += " ";
}
}
}           console.log(counter);
}
}
    console.log(addStars);
    return addStars;
}