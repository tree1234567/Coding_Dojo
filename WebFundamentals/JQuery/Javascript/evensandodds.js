function evensAndOdds(arr) {
    var threeOdds = 0;
    var threeEvens = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            threeOdds++;
        }
        if (threeOdds % arr[i]) {
            console.log("That's odd")
        }
            else {
console.log("Even so!");
}
}
}