//var User = require('../models/user');
var userController = require('../nodeControllers/userController');
var orderController = require('../nodeControllers/orderController');
module.exports = function (app) {
    app.get('/users', function (req, res) {userController.getUsers(req, res)});
    app.get('/orders', function (req, res) {orderController.getOrders(req, res)});
};