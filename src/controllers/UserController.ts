import {User} from '../models/UserModel';
import {Post} from '../models/PostModel';

import * as express from 'express';

const router = express.Router();

router.route('/')
    .post((req, res) => {
        User.forge({name: req.body.name, age: req.body.age}).save().then((user) => {
            res.status(201).json(user);
        });
    })

    .get((req, res) => {
        User.forge().fetchAll().then((users) => {
            res.status(200).json(users);
        });
    })
;

router.route('/:id')
    .put((req, res) => {
        User.forge({id: req.params.id}).save({name: req.body.name, age: req.body.age}).then((user) => {
            res.status(200).json(user);
        });
    })

    .delete((req, res) => {
        User.forge({id: req.params.id}).destroy().then((user) => {
            res.status(200).json(user);
        });
    })

    .get((req, res) => {
        User.forge({id: req.params.id}).fetch().then((user) => {
            res.status(200).json(user);
        });
    })
;

router.route('/:id/posts')
    .get((req, res) => {
        User.forge({id: req.params.id}).fetch({withRelated: 'posts'}).then((user) => {
            res.status(200).json(user.related('posts'));
        });
    })

    .post((req, res) => {
        User.forge({id: req.params.id}).save().then(function (user) {
            user.posts().create(new Post({title: req.body.title, content: req.body.content})).then((post) => {
                res.status(201).json(post);
            });
        });
    })
;

export = router;
