var bookshelf = require('../config/bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    posts: function () {
        return this.hasMany('Post');
    }
});

module.exports = bookshelf.model('User', User);
