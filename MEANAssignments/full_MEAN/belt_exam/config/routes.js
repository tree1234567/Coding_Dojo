var userController = require('./../controllers/userController.js');



module.exports = function(app){
    app.get('/api/', userController.index)
    app.post('/api/users/new', userController.new)
    app.post('/api/users/login', userController.login)
    app.get('/api/appointments', userController.getAll)
    app.post('/api/appointments/new', userController.newAppointment)
    app.post('/api/appointments/delete/', userController.delete)

}