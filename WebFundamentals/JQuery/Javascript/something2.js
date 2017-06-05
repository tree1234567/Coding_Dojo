function threeFives(){
var sum = 0;
for (var i = 100; i <= 4000000; i++) {
if ((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)) {
sum += i;
}
}
console.log(sum);
return sum;
}