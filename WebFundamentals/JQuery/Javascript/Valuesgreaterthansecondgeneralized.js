function greaterThanSecond(arr) {
    var newArr = [];
    if (arr.length == 0) {
        console.log("empty array");
}   else if (arr.length == 1) {
    console.log("only one element");
}   else {for (var i = 0; i = arr[1];) {
    newArr.push(arr[i]);
}
}
console.log(newArr);
return newArr;
}
greaterThanSecond([1,2,3,4,5,6]);