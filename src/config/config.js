var config = null;

var env = process.env.NODE_ENV;

if (env === 'dev') {
    config = require('./env/development');
} else if (env === 'prod') {
    config = require('./env/production');
} else {
    config = require('./env/development');
}

module.exports = config;
