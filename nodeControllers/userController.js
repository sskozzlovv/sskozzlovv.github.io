var User = require('../models/user');
module.exports.getUsers = function(req, res) {
    User.getUsersForPage(req.query.page, req.query.itemsPerPage, req.query.sort, req.query.name, function (err, users) {
        if (!err) {
            User.count({}, function (err, count) {
                res.json({"users": users, usersCount: count});
            })
        } else {
            res.send(err);
        }
    });
};