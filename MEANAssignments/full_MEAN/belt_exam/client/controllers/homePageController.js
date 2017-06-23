app.controller('homePageController', ['$scope','usersFactory', "$location","$cookies","appointmentsFactory", function($scope, usersFactory, $location, $cookies, appointmentsFactory){
if(!$cookies.get('user_id')){
    $location.url('/');
}
$scope.appointmentCreateErr = null;
$scope.appointmentDeleteErr = null;
$scope.appointments = [];
$scope.user_id = $cookies.get("user_id")



$scope.logout = function(){
    $cookies.remove("user_id");
    $location.url('/');

}

$scope.makeAppointment = function(){
    $location.url('/appointment/new')
}

function redirect(){
    $location.url('/')
}
function setError(message){
    $scope.appointmentCreateErr = message
}
function setAppointmentDeleteErr(message){
    $scope.appointmentDeleteErr = message
}

function setAppointmentsInScope(data){
    $scope.appointments = data;
}

appointmentsFactory.getAppointments(setAppointmentsInScope)

$scope.createAppointment = function(appointmentObj){
    appointmentsFactory.createAppointment(appointmentObj, $cookies.get("user_id"),redirect,setError);
}
$scope.dashboard = function(){
    $location.url("/");
}

$scope.deleteAppointment = function(appointmentID){
    var appointment = {appID : appointmentID}
    appointmentsFactory.deleteAppointment(appointment, setAppointmentsInScope, setAppointmentDeleteErr)
}


}])