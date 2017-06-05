function rollone(){
    var x = 0
    x = (Math.floor(Math.random()* 6)+1);
    console.log(x)
    return x
}

function playfivetimes(num){
    for (var i = 1; i < num; i++){
        rollone();
        if (rollone() == 5){
            console.log("That's good luck")
        }
    }
}

function playstatistics(){
    var min = 1000
    var max = 0 
    for(var x = 1; x <= 8; x++){
        rollone();
        if (rollone() < min){
            min = rollone()
        }
        if (rollone() > max){
            max = rollone()
        }

    }
}