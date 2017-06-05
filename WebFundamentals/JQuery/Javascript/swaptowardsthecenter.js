function swapOddIndexTowardsCenter(arr) {
    for(var i = 0; i < Math.floor(arr.length/2); i++) {
        if (i % 2 == 0) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length -1 - i] = temp;
}
}
    console.log(arr);
    return arr;
}