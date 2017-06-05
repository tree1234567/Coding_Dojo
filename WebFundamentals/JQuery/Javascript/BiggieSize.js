function makeitbig(nums){
    for (var x=0; x < nums.length; x++){
        if (nums[x]< 0){ 
            nums[x] = nums[x];}
       else {
        nums[x] = "big";}
    }
    console.log(nums);
    return nums;
    }
