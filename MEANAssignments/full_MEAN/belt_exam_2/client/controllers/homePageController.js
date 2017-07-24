app.controller('homePageController', ['$scope','usersFactory', "$location", "$cookies","questionFactory", function($scope, usersFactory, $location, $cookies, questionFactory){
if(!$cookies.get('user_id')){
    $location.url('/');
}

$scope.latestScore = null
$scope.results =[];

$scope.latestScore = questionFactory.howYouDid

function setResults(data){
    $scope.results = data
}

questionFactory.getResults(setResults);

$scope.logout = function(){
    console.log('working!');
    $cookies.remove("user_id");
    $location.url('/');

}


$scope.addQuestion = function(){
    $location.url('/add_question')
}

$scope.playgame = function(){
    $location.url('/playgame')
}

}])