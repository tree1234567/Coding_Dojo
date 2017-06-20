var app = angular.module('myApp',['ngRoute']);
console.log(app);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: '/partials/message_board.html',
        controller: 'userMessagingController'
    })
    .otherwise('/')

})

app.factory('userMessagingFactory', function($http){
    
    var factory = {}
    
    factory.messages=[];

    factory.getUsers = function(returnUsers){

        $http.get('/api/').then(function(res){
            console.log(res);
            factory.messages = res.data.messages;
            // console.log(factory.messages);
            returnUsers(factory.messages);
        })
        
    }

    factory.createMessage = function(messageObj, returnUsers){

        $http.post('/api/messages/new', messageObj).then(function(res){

            factory.getUsers(returnUsers)  
        })
    }


    factory.createComment = function(comment, messageId, returnUsers){

        $http.post('/api/comments/' + messageId + '/new', comment).then(function(res){

            factory.getUsers(returnUsers)
        })
    }

        
    return factory
})

app.controller('userMessagingController', ["$scope", "userMessagingFactory", function($scope, userMessagingFactory){
    $scope.users =[]
    userMessagingFactory.getUsers(getUsersandMessages);

    function getUsersandMessages(users){
        $scope.users = users
        $scope.messageObj = {};
        $scope.commentObj = {};
    }
    // console.log($scope.users);


    $scope.createMessage = function(messageObj){
        userMessagingFactory.createMessage(messageObj, getUsersandMessages);

    }

    $scope.createComment = function(commentObj, messageId){
        userMessagingFactory.createComment(commentObj, messageId, getUsersandMessages);
        // console.log(commentObj, messageIndex);
    }






}]);


