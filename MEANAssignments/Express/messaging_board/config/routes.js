
var messageController = require('./../controllers/messageController.js')

module.exports = function (app){
    app.get('/', messageController.index)
    app.post('/messages/new', messageController.new)
    app.post('/comments/:message_id/new', messageController.newComment);
};