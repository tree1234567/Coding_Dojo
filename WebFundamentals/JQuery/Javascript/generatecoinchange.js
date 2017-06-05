function messyMath(num) {
    sum = 0;
    for (var i = 0; i <= num; i++) {
        if ((num/3) % i == 0) {
            sum = -1;
            break;
    }
        else if (i % 3 == 0){
            continue;
    }   else if (i % 7 == 0) {
            sum += 2 * i;
    }   else {
            sum +=i;
    }
    }
    console.log(sum);
    return sum;
    }