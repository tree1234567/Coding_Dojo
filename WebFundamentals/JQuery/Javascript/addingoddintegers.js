sum = 0 
for(x=-300000; x< 300001; x+=1){
    if (x % 2==0){
        continue;
    }
    sum = x +sum
}
console.log(sum)