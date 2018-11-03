import {User} from '../models/UserModel';
import {Post} from '../models/PostModel';

import * as express from 'express';

const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        let user = await User.forge({name: req.body.name, age: req.body.age}).save();
        res.status(201).json(user);
    })

    .get(async (req, res) => {
        let users = await User.forge().fetchAll();
        res.status(200).json(users);
    })
;

router.route('/:id')
    .put(async (req, res) => {
        let user = await User.forge({id: req.params.id}).save({name: req.body.name, age: req.body.age});
        res.status(200).json(user);
    })

    .delete(async (req, res) => {
        let user = await User.forge({id: req.params.id}).destroy();
        res.status(200).json(user);
    })

    .get(async (req, res) => {
        let user = await User.forge({id: req.params.id}).fetch();
        res.status(200).json(user);
    })
;

router.route('/:id/posts')
    .get(async (req, res) => {
        let user = await User.forge({id: req.params.id}).fetch({withRelated: 'posts'});
        res.status(200).json(user.related('posts'));
    })

    .post(async (req, res) => {
        let user = await User.forge({id: req.params.id}).save();
        let post = await user.posts().create(new Post({title: req.body.title, content: req.body.content}));
        res.status(201).json(post);
    })
;

export = router;
