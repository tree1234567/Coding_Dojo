var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, "./bower_components")))
app.use(express.static(path.join(__dirname, "/client/assets")))


require("./config/mongooseSetup.js");
require("./config/routes.js")(app);





port = 8000
app.listen(port, function(){
    console.log('running on port: ' + port )
}) 