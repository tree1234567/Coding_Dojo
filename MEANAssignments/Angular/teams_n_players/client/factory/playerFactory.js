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