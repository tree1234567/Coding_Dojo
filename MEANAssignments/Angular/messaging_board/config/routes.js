
var messageController = require('./../controllers/messageController.js')

module.exports = function (app){
    app.get('/api/', messageController.index)
    app.post('/api/messages/new', messageController.new)
    app.post('/api/comments/:message_id/new', messageController.newComment);
    app.post('/api/replies/:comment_id/new', messageController.newReply);
};