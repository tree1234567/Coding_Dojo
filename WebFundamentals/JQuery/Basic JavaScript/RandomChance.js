
function dumbluck(quarters){
    while(quarters > 0){
        var playerNum = (Math.trunc(Math.random() * 100));
        var slotNumber = (Math.trunc(Math.random() * 100));
        quarters -= 1;
        console.log("Your Number was: "+playerNum + "  | Slot Number was: "+ slotNumber);
        if (playerNum == slotNumber){
            var amountWon = (Math.trunc(Math.random() *50)+51);
            quarters = quarters + amountWon;
            console.log("Winner! You won: " + amountWon)
        }
        else {
            console.log("Sorry you didnt win!")
        }
    }
    console.log("Sorry you're out of quarters.")
}