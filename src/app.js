var express = require('express');
var userRoute = require('./routes/userRoute');

var app = express();

// mount the sub apps
app.use('/users', userRoute);

module.exports = app;
