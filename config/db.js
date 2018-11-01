var pg = require('pg');
var config = require('./config');
var pool = new pg.Pool(config.db);
module.exports = pool;

