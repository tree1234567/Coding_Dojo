function intermediatesums(arr){
    var sum1 = 0
    var sum2 = 0
    for(var x = 0; x<arr.length; x++){
        sum1 += arr[x];
        if(arr[x]>arr[10]){
            sum2+= arr[x]
        }

    }
    console.log(sum1,sum2)
}