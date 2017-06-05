function removerange(arr, start,end){
    var arr2 = [];
    for(var x = 0; x < arr.length; x++){
        if(arr[x]==start){
            for(var i = start; i < end; i++ ){
                continue;
            }
        }
        else{
            arr2.push(arr[x])
        }

}
console.log(arr2)

}