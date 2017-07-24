app.controller('usersController', ["$scope", 'usersFactory','$location', "$cookies", function ($scope, usersFactory, $location, $cookies) {
    if ($cookies.get("user_id")){
        loadHomePage();
    }
    
    $scope.emailExists = null;
    $scope.loginErrors = null;


  
    function setCookie(user_id){
        $cookies.put('user_id', user_id)
    }
    
    function loadHomePage() {
        $location.url('/homepage')

    }

    function userExists(data) {
        if (data) {
            $scope.emailExists = data
        }
        else {
            loadHomePage();
        }
    }
    function loginErrors(errors) {
        $scope.loginErrors = errors
    }

    $scope.makeUser = function (userObj, confirmPassword) {
        // console.log(userObj)
        if (userObj.password === $scope.confirmPassword) {
            usersFactory.makeUser(userObj, userExists, setCookie)

        }
        else {
            $scope.passwordConfirmVal = "Passwords do not match"
        }
    }
    $scope.login = function (userLoginObj) {
        usersFactory.login(userLoginObj, loginErrors, loadHomePage, setCookie)
    }

}])



var compareTo = function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
};

app.directive("compareTo", compareTo);