var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var replySchema = new mongoose.Schema({
    name: { type: String, minlength: 2 },
    reply: { type: String, required: true},
    _comment : {type: Schema.Types.ObjectId, ref: "Comments"}
}, {timestamps: true})



mongoose.model('Replies', replySchema);