var config = null;

var env = process.env.NODE_ENV;

if (env === 'development') {
    config = require('./env/development');
} else {
    config = require('./env/development');
}

module.exports = config;
