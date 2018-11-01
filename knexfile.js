// Update with your config settings.
var config = require('./src/config/env/development');
module.exports = {
    development: {
        client: 'pg',
        connection: config.db
    }
};
