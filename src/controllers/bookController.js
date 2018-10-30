var pool = require('../../config/db');

module.exports = {
    index: function (req, res) {
        res.send([
            {"name": "node.js", "author": "guobin"},
            {"name": "php", "author": "guobin"},
        ]);
    }
};
