var userController = require('./../controllers/userController.js');

module.exports = function(app){
    app.get('/api/', userController.index)
    app.get('/api/get_questions', userController.getQuestions)
    app.post('/api/users/new', userController.new)
    app.post('/api/users/login', userController.login)
    app.post('/api/makeQuestion', userController.newQuestion)
    app.post('/api/make_result', userController.make_result)
    app.get('/api/get_results', userController.get_results)
}