var bookshelf = require('../config/bookshelf');

var Post = bookshelf.Model.extend({
    tableName: 'posts',
    hasTimestamps: true,
    user: function () {
        return this.belongsTo('User');
    }
});

module.exports = bookshelf.model('Post', Post);
