var User = require('../models/User');

module.exports = {
    index: function (req, res) {
        User.fetchAll().then(function (users) {
            res.status(200).json(users);
        });
    },
    show: function (req, res) {
        User.where({id: req.params.id}).fetch().then(function (user) {
            res.status(200).json(user);
        });
    },
    create: function (req, res) {
        new User({
            name: req.body.name,
            age: req.body.age
        }).save().then(function (user) {
            res.status(201).json(user);
        });
    },
    update: function (req, res) {
        User.forge({id: req.params.id})
            .save({
                name: req.body.name,
                age: req.body.age
            }).then(function (user) {
            res.status(200).json(user);
        });
    },
    destroy: function (req, res) {
        User.where({id: req.params.id}).destroy().then(function (user) {
            res.status(204).json({});
        });
    }
};
