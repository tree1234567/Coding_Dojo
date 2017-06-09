module.exports = function route(app,server){
    var io = require("socket.io").listen(server)
    io.sockets.on('connection', function(socket){
        
    })




    app.get('/', function(req,res){
        res.render('index')
    })


}