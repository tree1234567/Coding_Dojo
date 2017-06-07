$(document).ready(function(){
    console.log("Loaded.")
    $.get("https://api.github.com/users/tree1234567").done(displayName).fail(displayFailure)

    $Dojo('button').click(function(){
        alert("Working!");
    })


})

function displayName(data){
    $('.github').append("<p>" + data.name + "</p>");
}

function successmessage(){
    "GitHub data was retrieved!"
}

function displayFailure(){
    alert("Ya dun goof'd")
}





