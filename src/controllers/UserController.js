var User = require('../models/UserModel');
var Post = require('../models/PostModel');

var express = require('express');
var router = express.Router();

router.route('/')
    .post(function (req, res) {
        User.forge({name: req.body.name, age: req.body.age}).save().then(function (user) {
            res.status(201).json(user);
        })
    })

    .get(function (req, res) {
        User.forge().fetchAll().then(function (users) {
            res.status(200).json(users);
        })
    })
;

router.route('/:id')
    .put(function (req, res) {
        User.forge({id: req.params.id}).save({name: req.body.name, age: req.body.age}).then(function (user) {
            res.status(200).json(user);
        })
    })

    .delete(function (req, res) {
        User.forge({id: req.params.id}).destroy().then(function (user) {
            res.status(200).json(user);
        })
    })

    .get(function (req, res) {
        User.forge({id: req.params.id}).fetch().then(function (user) {
            res.status(200).json(user);
        })
    })
;

router.route('/:id/posts')
    .get(function (req, res) {
        User.forge({id: req.params.id}).fetch({withRelated: 'posts'}).then(function (user) {
            res.status(200).json(user.related('posts'));
        })
    })

    .post(function (req, res) {
        User.forge({id: req.params.id}).save().then(function (user) {
            user.posts().create(new Post({title: req.params.title, content: req.params.content}));
            res.status(201).json(user);
        })
    })
;

module.exports = router;
