exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', function (t) {
        t.increments('id').primary();
        t.string('title');
        t.string('content');
        t.integer('user_id').references('users.id');
        t.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('posts');
};
