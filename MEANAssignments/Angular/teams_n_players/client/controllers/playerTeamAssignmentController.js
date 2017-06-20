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