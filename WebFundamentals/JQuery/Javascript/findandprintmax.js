function cycleThrough(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum/arr.length)
}