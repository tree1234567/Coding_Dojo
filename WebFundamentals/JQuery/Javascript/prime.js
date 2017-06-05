function sweatshirtpricing(num){
    var cost = 0
    if (num == 1){
        console.log("Costs: $20")
    }
    if (num == 2){
        cost = (20 * .91)
        console.log("Sweaters cost: $" + (Math.ceil(cost) * num))
    }
     if (num == 3){
        cost = (20 * .81)
        console.log("Sweaters cost: $" + (Math.ceil(cost) * num))
}    if (num >= 4){
        cost = (20 * .65)
        console.log("Sweaters cost: $" + (Math.ceil(cost) * num))
    }
}