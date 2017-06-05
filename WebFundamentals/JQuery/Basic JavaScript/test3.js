// function inOrdersubset(str, pos=''){
//     var arr = []
//     arr.push(pos)
//     if(str.length == 0){
//         // arr.push(pos)
//         return arr
//     }
//     for(var x=0; x<str.length;x=x+1){
//         var substr= pos+str[x]
//         var newstr = str.slice(x+1)
//         // arr.push(pos)
//         var next = inOrdersubset(newstr, substr)
//         arr= arr.concat(next)
        
//     }
//     return arr
// }

// var str = 'abc'

// console.log(inOrdersubset(str))

function all_combos(str){
    var placeholder = '_'
    var combinations = []
    for (var x=0; x < str.length; x=x+1){
        if (str[x] == placeholder){
            return combinations = combinations.concat(all_combos(str.slice(0,x)+'1' + str.slice(x+1))).concat(all_combos(str.slice(0,x)+'0' + str.slice(x+1)))
            
        } 


    }
    return str
}


binary_str = '1_0_1' 

console.log(all_combos(binary_str))