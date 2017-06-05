function generateCoinChange(num) {
    var coinChange = [];
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    for (var i = 0; num > 0; i++) {
        if (num > 25) {
            num -= 25;
            quarters++;
}       else if (num > 10) {
            num -= 10;
            dimes++;
}       else if (num > 5) {
            num -= 5;
            nickels++;
}       else if (num >= 1) {
            num -= 1;
        pennies++;
}
}
coinChange.push("quarters: " + quarters);
coinChange.push("dimes:" + dimes);
coinChange.push("nickels:" + nickels);
coinChange.push("pennies:" + pennies);
console.log(coinChange);
return coinChange;
}