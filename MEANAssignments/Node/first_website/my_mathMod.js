module.exports = function(){

    return{
        add: function(num1,num2) {
            return num1+num2;
        },
        multiply: function(num1,num2){
            return num1*num2;
        },
        square: function(num1){
            return num1*num1;
        },
        random: function(num1){
            return Math.round(Math.random()*num1);
        }
    }


};