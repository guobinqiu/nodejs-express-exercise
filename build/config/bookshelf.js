"use strict";
var Knex = require("knex");
var Bookshelf = require("bookshelf");
var config = require("./config");
var knex = Knex({
    client: 'pg',
    connection: config.db
});
var bookshelf = Bookshelf(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
