//var User = require('../models/user');
var userController = require('../nodeControllers/userController');
module.exports = function (app) {
    app.get('/users', function (req, res) {userController.getUsers(req, res)});
};