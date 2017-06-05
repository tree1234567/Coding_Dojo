function secondtolast(arr){
    var max = 0;
    var max2 = 1000;
    for(var x = 0; x < arr.length; x++){
        if (arr[x]> max){
            max = arr[x]
        }
        if (arr[x] < max && arr[x] > max2){
            max2 = arr[x]
        }
    }
    console.log(max2)

}