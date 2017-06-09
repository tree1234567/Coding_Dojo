function quicksort(arr){
    if (arr.length <= 1 ){
        return arr;
    }

   
    var arr1 = [];
    var arr2 = [];


    for (var x=1; x < arr.length; x=x+1){

        if (arr[x] < arr[0]){
            arr1.push(arr[x])
        } 
        else{
            arr2.push(arr[x]) 
        }
    }

    return result = quicksort(arr1).concat([arr[0]]).concat(quicksort(arr2));
}

var numarr = [2,1,3,4,3,1,7,1]
console.log(quicksort(numarr))