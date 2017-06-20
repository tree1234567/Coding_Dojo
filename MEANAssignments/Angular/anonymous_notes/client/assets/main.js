var app = angular.module('myApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/secrets.html',
            controller: 'secretController'
        })
})


app.factory('secretFactory', function ($http) {
    var factory = {};
    factory.secrets = [];
    factory.getMessages = function (getSecrets) {
        $http.get('/api').then(function (response) {

            factory.secrets = response.data.secrets;
            // console.log(factory.secrets)
            getSecrets(response.data.secrets);
        })


    }



    factory.createSecret = function (secret, getSecrets) {
        $http.post('/api/secret/new', secret).then(function (res) {
            console.log(res);
            factory.getMessages(getSecrets);
        })
    }

    return factory;

})

app.controller('secretController', function ($scope, secretFactory) {

    $scope.secrets = [];
    secretFactory.getMessages(getSecrets)


    function getSecrets(secrets) {
        // console.log(secrets)
        $scope.secrets = secrets
        console.log($scope.secrets)
    }
    $scope.addSecret = function (secret) {
        secretFactory.createSecret(secret, getSecrets);
    }


})