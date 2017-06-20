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