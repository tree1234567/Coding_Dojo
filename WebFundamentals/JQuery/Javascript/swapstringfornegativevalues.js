function sum_odd(arr){
    var sum = 0;
    for(arr = 4; arr < 176; arr++){
        if (arr % 2==1){
            sum = sum+ arr
        }
    }

    return sum;
}