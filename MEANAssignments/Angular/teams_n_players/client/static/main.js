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

app.factory('playersFactory', function () {
    var players = [
        { name: "Jay Cutler" },
        { name: "Rex Grossman"},
        { name: "Billy" },
        { name: "John" }
    ]
    var factory = {}
    factory.returnPlayers = function (sendPlayersToController) {
        sendPlayersToController(players)
    }
    factory.MakeAssociation = function(playerIndex, teamName, updatePlayertoControllers){
        var player = players[playerIndex]
        player.team = teamName;
        updatePlayertoControllers(players) 
    }
    factory.removeAssociation = function(playerIndex, updatePlayertoControllers){
        var player = players[playerIndex];
        player.team = "";
        updatePlayertoControllers(players)

    }
    factory.removeAssociationByName = function(teamName){
        for(x in players){
            if(players[x].team == teamName){
                players[x].team = ""
            }
        }
    }
    factory.removePlayer = function(playerIndex, updatePlayertoControllers){
        players.splice(playerIndex,1);
        updatePlayertoControllers(players)
    }
    factory.addPlayer = function(playerObj, updatePlayers){
        players.push(playerObj);
        updatePlayers(players)
    }
    return factory;
})

app.factory('teamsFactory', function () {
    var teams = [
        { name: "Bears" },
        { name: "Texans" },
        { name: "Dolphins" }
    ]
    var factory = {}
    factory.returnTeams = function (sendTeamsToController) {
        sendTeamsToController(teams)
    }
    factory.removeTeam = function(teamIndex, sendUpdatedTeamsToController){
        teams.splice(teamIndex,1);
        sendUpdatedTeamsToController(teams)
    }
    factory.addTeam = function(teamObj, updateTeams){
        teams.push(teamObj);
        updateTeams(teams);
    }
    return factory;
})

app.controller('playersController', ["$scope", "playersFactory", function ($scope, playersFactory) {
    $scope.players = [];
    playersFactory.returnPlayers(getPlayers)
    function getPlayers(players) {
        $scope.players = players
    }
    $scope.playerRemove = function(playerIndex){
        playersFactory.removePlayer(playerIndex, getPlayers)
    }
    $scope.playerAdd = function(){
        var playerObj = {name : $scope.playerName};
        playersFactory.addPlayer(playerObj,getPlayers)
        $scope.playerName = ''
    }
}])

app.controller('teamsController', ["$scope", "teamsFactory", "playersFactory", function ($scope, teamsFactory, playersFactory) {
    $scope.teams = [];
    teamsFactory.returnTeams(getTeams)
    function getTeams(teams) {
        $scope.teams = teams
    }
    $scope.removeTeam = function(teamIndex, teamName){
        teamsFactory.removeTeam(teamIndex, getTeams)
        playersFactory.removeAssociationByName(teamName)
            
    }
    $scope.addTeam = function(){
        var teamObj = {name: $scope.teamName};
        teamsFactory.addTeam(teamObj, getTeams);
        $scope.teamName = "";
    }

    }])
app.controller('playerTeamAssignmentController', ["$scope", "playersFactory", "teamsFactory", function ($scope, playersFactory, teamsFactory) {
    $scope.players = [];
    $scope.teams = [];
    playersFactory.returnPlayers(getPlayers)
    teamsFactory.returnTeams(getTeams)
    function getPlayers(players) {
        $scope.players = players
    }
    function getTeams(teams) {
        $scope.teams = teams
    }
    $scope.MakeAssociation = function(){
        playersFactory.MakeAssociation($scope.playerIndex, $scope.teamName.name, getPlayers)
        // console.log($scope.playerName);
    }
    $scope.removeAssociation = function(playerIndex){
        playersFactory.removeAssociation(playerIndex, getPlayers)
    }

}])






