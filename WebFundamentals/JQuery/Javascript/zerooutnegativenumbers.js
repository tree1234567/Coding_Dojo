function greaterthanY(arr){
    var minNum = 0
    var maxNum = 0
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i]
        }
        if (arr[i] > maxNum){
            maxNum = arr[i]
        }
        sum += arr[i]
        }
    console.log("Average: " + sum/(arr.length))
    console.log("Min: " + minNum)
    console.log("Max: " + maxNum)
    
}
