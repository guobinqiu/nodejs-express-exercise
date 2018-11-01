var bookshelf = require('../../config/db').bookshelf;

var User = bookshelf.Model.extend({
    tableName: 'tbl_user'
});

module.exports = User;

