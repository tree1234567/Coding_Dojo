function mintofront(arr){
    var min = 1000000;
    for (var x = 0; x < arr.length; x++){
        if (min > arr[x]){
            min = arr[x]
        }
    }
console.log(min);
arr.unshift(min);
console.log(arr);
}
// dont know how to remove the duplicate.... :(