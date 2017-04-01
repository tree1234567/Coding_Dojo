function FancyArray(arr, TorF){
    for(var x=0; x<arr.length; x++){
        if (TorF == true){
            console.log((arr.length - x -1) + "=>"+ arr[arr.length - x -1])

        }
        else{
             console.log(x +"=>"+arr[x]);
        }
    }

}