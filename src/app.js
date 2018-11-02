var express = require('express');
var bodyParser = require('body-parser');
var UserController = require('./controllers/UserController');

var app = express();

app.use(bodyParser.json());

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};

app.use(allowCrossDomain);

app.use('/users', UserController);

module.exports = app;
