import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as userController from './controllers/UserController';

const app = express();

app.use(bodyParser.json());

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};

app.use(allowCrossDomain);

app.use('/users', userController);

app.use((req, res, next) => {
    res.status(404);
    res.json('Not found');
});

app.use((err, req, res, next) => {
    res.status(500);
    res.json(err.message || 'Server error');
});

export = app;
