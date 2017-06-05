function removenegatives(arr){
    var newarr = []
    for(var x = 0; x < arr.length; x++){
        if(arr[x] < 0){
            continue;
        }
        else{
            newarr.push(arr[x])
        }
    }
    console.log(newarr);
}