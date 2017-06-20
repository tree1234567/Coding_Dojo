var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var secretSchema = new mongoose.Schema({
    secret: {type: String},
}, {timestamps:true});

mongoose.model('Secrets', secretSchema);