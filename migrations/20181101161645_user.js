exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('name');
        t.integer('age');
        t.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
