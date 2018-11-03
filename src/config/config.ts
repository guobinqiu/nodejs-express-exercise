let config = null;

let env = process.env.NODE_ENV;

if (env === 'development') {
    config = require('./env/development');
} else {
    config = require('./env/development');
}

export = config;
