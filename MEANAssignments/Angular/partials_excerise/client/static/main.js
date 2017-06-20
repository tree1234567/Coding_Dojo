var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/partial1.html',
            // controller : ''
        })
        .when('/partial2', {
            templateUrl: "partials/partial2.html"
        })
        .otherwise({
            redirectTo: '/'
        })
})

app.factory('userFactory', function () {
    var users = [
        { firstName: "Bob", lastName: "The Builder", favoriteLanguage: "python" },
        { firstName: "Fred", lastName: "Burger", favoriteLanguage: "ruby" },
        { firstName: "Jill", lastName: "Stein", favoriteLanguage: "Javascript" },
        { firstName: "Billy", lastName: "Jacobson", favoriteLanguage: "ruby" }
    ]
    var factory = {};
    factory.returnUsers = function (callback) {
        callback(users);
    }

    factory.removeUser = function(userIndex, callback){
        users.splice(userIndex, 1);
        callback(users)
    }
    factory.addUser = function(userObj, callback){
        users.push(userObj);
        callback(users);
    }
    return factory;
})

app.controller('usersController', ["$scope", 'userFactory', function ($scope, userFactory) {
    $scope.users =[];
    userFactory.returnUsers(getUsers);

    function getUsers(users){
        $scope.users = users
    }
    $scope.removeUser = function(userIndex){
        userFactory.removeUser(userIndex, getUsers)
    }
    $scope.addUser = function(){
        var userObj = {firstName: $scope.firstName, lastName: $scope.lastName, favoriteLanguage: $scope.favoriteLanguage};
        userFactory.addUser(userObj, getUsers);
        $scope.firstName=""
        $scope.lastName=""
        $scope.favoriteLanguage=""
    }
}])

app.controller('usersViewController',["$scope",'userFactory', function($scope, userFactory){
    $scope.users =[];
    function getUsers(users){
        $scope.users = users
    }
    userFactory.returnUsers(getUsers);
}])
