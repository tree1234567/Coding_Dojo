function concat(arr1,arr2){
    arr1.push.apply(arr1,arr2)
    console.log(arr1)
}