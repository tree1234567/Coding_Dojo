function sumToDigit(num){
    var str = num.toString();
    var sum = 0;
    if (str.length == 1) {
        sum = parseInt(str, 10);
        return sum;
}   else {
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str.charAt(i), 10);
}
        return sumToDigit(sum);
}
}