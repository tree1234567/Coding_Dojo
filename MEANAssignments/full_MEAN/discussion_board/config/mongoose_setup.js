var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/discussion_board');
mongoose.Promise = global.Promise;

var fs = require('fs'),
    path = require('path'),
    models_path = path.join(__dirname,'/../models');

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf('.js') > 0){
        require(models_path + '/' + file);
    }
})