function radixsort(arr, count=2){
    
    if (count < 0 ){
        return arr
    }
    var sortarr = [[],[],[],[],[],[],[],[],[],[]];

    for(var x=0; x<users.length; x=x+1){
        var user = arr[x]
        sortarr[user.phonenumber[count]].push(user);
    }

    var pastarr = sortarr.reduce((combined,array) => combined.concat(array));
    console.log("Times gone:", pastarr)
    return radixsort(pastarr,count-=1);
    
}


users = [
    {phonenumber: '312'},
    {phonenumber: '321'},
    {phonenumber: '123'}];


// console.log(users[0].phonenumber[count])
console.log(radixsort(users))