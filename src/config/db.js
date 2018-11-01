var config = require('./config');
var knex = require('knex')({
    client: 'pg',
    connection: config.db
});
var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;
