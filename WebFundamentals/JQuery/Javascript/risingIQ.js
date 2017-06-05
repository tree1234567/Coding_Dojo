// rise by .01 everday for 98 days.

function risingIQ(num){
    var sum = 0
    for(var x = 0; x < 99; x++ ){
        sum += x; 
    }
    sum = (sum/100) + num;
    console.log(sum);
}