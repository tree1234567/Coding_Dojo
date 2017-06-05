function filterrange(arr, min, max){
    for (var x = 0;x < arr.length; x++){
        if(arr[x]<= min||arr[x] >= max){
            delete arr[x];
        }
    }
    console.log(arr)
    }
