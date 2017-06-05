function keepLastFew(arr, num) {
    for (var i = 0; i < num; i++) {
        arr.shift();
}
    console.log(arr);
    return arr;
}