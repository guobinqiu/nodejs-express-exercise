var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/userRoute');

var app = express();

// middlewares
app.use(bodyParser.json());

// mount the sub apps
app.use('/users', userRoute);

module.exports = app;
