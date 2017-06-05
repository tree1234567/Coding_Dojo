function greaterthanY(arr){
    var y = 4
    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count +=1
        }
    }
    console.log("Number of values greater than y " + count)
} 