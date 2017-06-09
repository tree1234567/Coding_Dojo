// requirements
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');



//   ROUTING
app.get('/', function(request,response){
    response.send('Hello Express!');
});

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.get('/index', function(request,response){
    response.render('index');
});

app.post('/users', function(request, response){
    console.log("POST DATA \n\n", request.body)
    response.redirect('/')
});


app.listen(9000, function(){
    console.log('listening on port 9000')

});
