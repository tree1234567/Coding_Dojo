var secretController = require('./../controllers/secretController.js');

module.exports = function (app){
    app.get('/api', secretController.index);
    app.post('/api/secret/new', secretController.create);

}
