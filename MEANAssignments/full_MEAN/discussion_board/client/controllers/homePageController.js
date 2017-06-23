app.controller('homePageController', ['$scope','usersFactory', "$location", "$cookies", function($scope, usersFactory, $location, $cookies){
if(!$cookies.get('user_id')){
    $location.url('/');
}

$scope.logout = function(){
    console.log('working!');
    $cookies.remove("user_id");
    $location.url('/');

}

}])