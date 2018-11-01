var User = require('../models/user');
var Post = require('../models/post');

module.exports = {
    index: function (req, res, next) {
        User.fetchAll().then(function (users) {
            res.status(200).json(users);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    show: function (req, res, next) {
        User.where({id: req.params.id}).fetch().then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    create: function (req, res, next) {
        User.forge({name: req.body.name, age: req.body.age}).save().then(function (user) {
            res.status(201).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    update: function (req, res, next) {
        User.forge({id: req.params.id}).save({name: req.body.name, age: req.body.age}).then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    destroy: function (req, res, next) {
        User.where({id: req.params.id}).destroy().then(function (user) {
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    addUserPost: function (req, res, next) {
        User.forge({name: 'guobin', age: 10}).save().then(function (user) {
            user.posts().create(Post.forge({title: 'first post', content: 'sfafd'}));
            user.posts().create(Post.forge({title: 'second post', content: 'grdgfds'}));
            res.status(200).json(user);
        }).catch(function (err) {
            return next(new Error(err));
        });
    },
    getUserPosts: function (req, res, next) {
        User.forge({name: 'guobin'}).fetch({withRelated: 'posts'}).then(function (user) {
            var posts = user.related('posts');
            res.status(200).json(posts);
        }).catch(function (err) {
            return next(new Error(err));
        });
    }
};
