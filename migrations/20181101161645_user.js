exports.up = function (knex, Promise) {
    return knex.schema.createTable('tbl_user', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name');
        t.integer('age');
        t.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tbl_user');
};
