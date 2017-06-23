var app = angular.module('myApp', ["ngRoute", 'ngMessages', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/new_user.html'
        })
        .when('/homepage',{

            templateUrl: '/partials/home.html'
        })
        .when('/appointment/new',{

            templateUrl: '/partials/appointments.html'
        })
        .otherwise('/')
})