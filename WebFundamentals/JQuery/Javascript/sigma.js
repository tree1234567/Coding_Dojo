function sigma(num){
    var sum = 1
    var count = 1
    while(count != num+1){
        sum = count*sum;
        count = count + 1;

    }
    console.log(sum);
    }
