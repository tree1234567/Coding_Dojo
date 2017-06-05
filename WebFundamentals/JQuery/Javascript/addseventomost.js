function sevenToMost(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number'){
    newArr.push(arr[i] + 7);
}
}
    console.log(newArr);
    return newArr;
}