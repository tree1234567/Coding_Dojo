function outlookNegative(arr) {
    count = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
            count +=1;
        }
        
    }
    if (count==0){
            console.log("I'm hungry")
        }
}