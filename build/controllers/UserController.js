"use strict";
var UserModel_1 = require("../models/UserModel");
var PostModel_1 = require("../models/PostModel");
var express = require("express");
var router = express.Router();
router.route('/')
    .post(function (req, res) {
    UserModel_1.User.forge({ name: req.body.name, age: req.body.age }).save().then(function (user) {
        res.status(201).json(user);
    });
})
    .get(function (req, res) {
    UserModel_1.User.forge().fetchAll().then(function (users) {
        res.status(200).json(users);
    });
});
router.route('/:id')
    .put(function (req, res) {
    UserModel_1.User.forge({ id: req.params.id }).save({ name: req.body.name, age: req.body.age }).then(function (user) {
        res.status(200).json(user);
    });
})
    .delete(function (req, res) {
    UserModel_1.User.forge({ id: req.params.id }).destroy().then(function (user) {
        res.status(200).json(user);
    });
})
    .get(function (req, res) {
    UserModel_1.User.forge({ id: req.params.id }).fetch().then(function (user) {
        res.status(200).json(user);
    });
});
router.route('/:id/posts')
    .get(function (req, res) {
    UserModel_1.User.forge({ id: req.params.id }).fetch({ withRelated: 'posts' }).then(function (user) {
        res.status(200).json(user.related('posts'));
    });
})
    .post(function (req, res) {
    UserModel_1.User.forge({ id: req.params.id }).save().then(function (user) {
        user.posts().create(new PostModel_1.Post({ title: req.body.title, content: req.body.content })).then(function (post) {
            res.status(201).json(post);
        });
    });
});
module.exports = router;
