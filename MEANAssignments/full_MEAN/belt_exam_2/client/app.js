var app = angular.module('myApp', ["ngRoute", 'ngMessages', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/new_user.html'
        })
        .when('/homepage', {

            templateUrl: '/partials/home.html'
        })
        .when('/add_question', {

            templateUrl: '/partials/add_question.html'
        })
        .when('/playgame', {

            templateUrl: '/partials/play_game.html'
        })
        .otherwise('/')

})