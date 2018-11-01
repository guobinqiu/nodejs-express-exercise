var bookshelf = require('../config/db');

var User = bookshelf.Model.extend({
    tableName: 'tbl_user'
});

module.exports = User;

