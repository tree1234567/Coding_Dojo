function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    if (arr.length == 0) {
        console.log("only one num");
}   else if (arr.length == 1) {
        console.log("only one num");
}   else {
        for(var i = 0; i < arr.length; i++) {
            if (arr[i] > high){
                high = arr[i];
            if (arr[i] < low){
                low = arr[i];
            }
}
}
}
console.log(low);
return high;
}
