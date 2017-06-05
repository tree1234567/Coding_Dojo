function incrementSeconds(arr){
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1;
}
}
    console.log(arr);
    return arr;
}