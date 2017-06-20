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