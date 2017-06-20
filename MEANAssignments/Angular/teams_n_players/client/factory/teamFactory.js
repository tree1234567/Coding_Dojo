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