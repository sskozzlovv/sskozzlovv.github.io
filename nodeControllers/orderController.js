var Order = require('../models/order');
module.exports.getOrders = function (req, res) {
    Order.getOrdersForPage(req.query.page, req.query.itemsPerPage, req.query.sort, req.query.orderNo, req.query.dateFrom,
        req.query.dateTo, req.query.status, function (err, orders) {
            var page = req.query.page || 1;
            var itemsPerPage = req.query.itemsPerPage || 10;
            if (!err) {
                var filteredOrders = orders.slice((page-1)*itemsPerPage, page*itemsPerPage);
                res.json({"orders": filteredOrders, ordersCount: orders.length});
            } else {
                res.send(err);
            }
        });
};