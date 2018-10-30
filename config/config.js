var config = null;

if (process && process.env && process.env.NODE_ENV) {
    config = require('./env/' + process.env.NODE_ENV);
} else {
    console.error('Missing env configuration');
}

module.exports = config;