var mysql = require('mysql');
var config = require('../../config/config');
var pool = mysql.createPool(config.mysql);

module.exports = {
    showUsers: function (req, res, callback) {
        pool.getConnection(function (err, connection) {
            var sql = 'SELECT * FROM tbl_game';
            connection.query(sql, function (err, result) {
                callback(err, result);
                // 释放连接
                connection.release();
            });
        });
    }
};
