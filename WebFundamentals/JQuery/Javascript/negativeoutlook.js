function outlookNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
    if(i > 0) {
        newArr.push(arr[i] * -1);
} else {
newArr.push(arr[i]);
}
}
console.log(newArr);
return newArr;
}