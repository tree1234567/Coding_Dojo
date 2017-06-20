var app = angular.module('app', ["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/players.html' 
        })
        .when('/teams', {
            templateUrl: 'partials/teams.html'
        })
        .when('/associations',{
            templateUrl: 'partials/playerTeamAssociation.html'
        })
        .otherwise({
            redirectTo: '/'
        })
        
})