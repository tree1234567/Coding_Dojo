var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: { type: String, minlength: 2 },
    message: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
}, { timestamps: true });

mongoose.model('Messages', messageSchema);