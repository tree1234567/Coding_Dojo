function split(arr){
    var half= Math.floor(arr.length/2);
    var firstHalf= arr.slice(0,half);
    var secondHalf = arr.slice(half);
    console.log({ firstHalf, secondHalf })
    return { firstHalf, secondHalf };
}

function mergeSort(arr){
    
    if (arr.length > 1){
        var half = arr.length/2
        var firstHalf = arr.slice(0,half)
        var secondHalf =arr.slice(half)
        mergeSort(firstHalf);
        mergeSort(secondHalf);
    }
    if (arr.length ===1){
        var half = arr
        return half;
    }
    var newArray=[];
    var count1 = 0;
    var count2 = 0;
    while(count1 != firstHalf.length || count2 != secondHalf.length){
        if (firstHalf[count1] <= secondHalf[count2]){
            newArray.push(firstHalf[count1])
            count1 +=1
        }
        else{
         newArray.push(secondHalf[count2])
         count2 +=2
        }   
    }
    return newArray

}

var array = [2,3,1,4]
console.log(mergeSort(array));
cons