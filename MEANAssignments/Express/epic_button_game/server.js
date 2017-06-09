
var express = require("express");
var path = require("path");

var app = express();

var count = 0

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
// -------------- ROUTING --------------

app.get('/', function(req, res) {
 res.render("index", {count: count});
})



// -------------------------------------








var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log("socket working!")


    socket.on('button_clicked', function(data){
        console.log("A button was clicked!!!!")
        count +=1
        socket.emit('server_response', {blah : count})
    })
    




})