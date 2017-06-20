var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client_facing/')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.set('views', path.join(__dirname, './client_facing/views'));
// app.set('view engine', 'ejs');

require('./config/mongoose_setup.js');
require('./config/routes.js')(app);


app.listen(8000, function () {
    console.log('listening on port 8000');
})