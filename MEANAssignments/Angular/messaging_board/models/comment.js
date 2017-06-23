var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    name: { type: String, minlength: 2 },
    comment: { type: String, required: true },
    _message: { type: Schema.Types.ObjectId, ref: 'Messages' },
    _replies: [{type : Schema.Types.Object, ref : 'Replies' }]
}, { timestamps: true });

mongoose.model('Comments', commentSchema);
