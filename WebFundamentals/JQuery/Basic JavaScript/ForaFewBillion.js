function fewbillion(start){
    var money = 1;
    console.log("Money on day 1: " + money)
    for(var day = 2; day<=30; day++){
        money = (money+money);
    }
    console.log("Money after 30 days: " +(money/100))
}