var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/userRoute');

var app = express();

app.use(bodyParser.json());

app.use('/users', userRoute);

module.exports = app;
