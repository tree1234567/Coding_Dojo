var app = angular.module('app', []);

app.factory('spagetFactory', function () {
    var food = [
        'banana',
        'mochi',
        'swedish fish',
        'caviar'
    ]

    var factory = {}
    factory.getFood = function (callback) {
        callback(food)
    }
    factory.deleteFood = function (item,callback) {
        food.splice(food,1);
        callback(food);
    }
    factory.addingFood = function(addedFood, callback){
        food.push(addedFood);
        callback(food);
    }






    return factory;

})


app.controller('spagetController', ['$scope', 'spagetFactory', function ($scope, spagetFactory) {
    $scope.foods = []
    spagetFactory.getFood(setFood)



    function setFood(food) {
        $scope.foods = food
    }

    $scope.addFood = function () {
        spagetFactory.addingFood($scope.newFood, setFood);
         $scope.newFood = "";
    };
    $scope.deleteFood= function(item){
        spagetFactory.deleteFood(item, setFood)
    }
    $scope.printFoodIndex = function(index){
        console.log(index);
    }

}])