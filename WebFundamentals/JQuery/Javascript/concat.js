function skyline(arr){
    var newarr = []
    var max= 0
    for(var x = 0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    newarr.push(max);
    console.log(newarr);

}