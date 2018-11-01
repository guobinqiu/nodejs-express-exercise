var User = require('../models/User');

module.exports = {
    index: function (req, res, next) {
        User.fetchAll().then(function (users) {
            res.status(200).json(users);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    show: function (req, res) {
        User.where({id: req.params.id}).fetch().then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    create: function (req, res) {
        User.forge({name: req.body.name, age: req.body.age}).save().then(function (user) {
            res.status(201).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    update: function (req, res) {
        User.forge({id: req.params.id}).save({name: req.body.name, age: req.body.age}).then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    destroy: function (req, res) {
        User.where({id: req.params.id}).destroy().then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    }
};
