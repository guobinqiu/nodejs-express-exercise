var userModel = require('../models/userModel');

module.exports = {
    indexAction: function (req, res) {
        userModel.showUsers(req, res, function (err, result) {
            res.send(result);
        });
    }
};