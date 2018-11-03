import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';
import * as config from './config';

const knex = Knex({
    client: 'pg',
    connection: config.db
});
let bookshelf = Bookshelf(knex);
bookshelf.plugin('registry');

export = bookshelf;
