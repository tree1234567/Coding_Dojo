app.controller('questionController', ['$scope', 'questionFactory', "$location", "$cookies", function ($scope, questionFactory, $location, $cookies) {
    if (!$cookies.get('user_id')) {
        $location.url('/');
    }

    $scope.questionErrors = null
    $scope.questions = []
    $scope.count = 0

    questionFactory.getQuestions(getQuestions)

    function getQuestions(data) {
        $scope.questions = data
        console.log($scope.questions)
    }

    function makeErrors(data) {
        $scope.questionErrors = data
    }
    function redirect() {
        $location.url("/")
    }

    $scope.newQuestion = function (questionObj) {
        questionFactory.makeNewQuestion(questionObj, redirect, makeErrors)
    }


    $scope.redirect = function () {
        $location.url("/")
    }

    $scope.submitQuiz = function (resultsObj) {
            resultsObj.user_id = $cookies.get("user_id")
            resultsObj.questionOneId = $scope.questions[0]._id
            resultsObj.questionTwoId = $scope.questions[1]._id
            resultsObj.questionThreeId = $scope.questions[2]._id
            questionFactory.makeResult(resultsObj,redirect);
            // console.log(resultsObj);
    }




}])