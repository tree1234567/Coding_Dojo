function previousLengths(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            arr[i] = arr[i].length;
            console.log("string");
}       else {
            console.log("not a string");
}
}
    console.log(arr);
    return arr;
}