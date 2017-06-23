var userController = require('./../controllers/userController.js');
var topicController = require('./../controllers/topicController.js')

module.exports = function(app){
    app.get('/api/', userController.index)
    app.post('/api/users/new', userController.new)
    app.post('/api/users/login', userController.login)
    app.post('/topics/new', topicController.new)

}