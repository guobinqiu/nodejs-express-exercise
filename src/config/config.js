var config = null;

var env = process.env.NODE_ENV;

if (env === 'development') {
    config = require('./env/development');
} else if (env === 'production') {
    config = require('./env/production');
} else {
    config = require('./env/development');
}

module.exports = config;
