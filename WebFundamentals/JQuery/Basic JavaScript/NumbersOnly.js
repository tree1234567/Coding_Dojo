function NumsOnly(arr){
    for (var x=0; x<arr.length; x++){
        if (typeof arr[x] === "number"){
            console.log(arr[x]+" is a number");
        }
        else{
            console.log(arr[x] + " is not a number");
        }

    }
}