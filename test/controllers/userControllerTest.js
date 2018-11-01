var assert = require('assert');
var request = require('supertest');
var app = require('../../src/app.js');
var User = require('../../src/models/User');
var knex = require('../../config/db').knex;

beforeEach(function () {
    knex('tbl_user').del().then(function () {});
});

describe('userController', function () {
    it('create', function (done) {
        request(app)
            .post('/users')
            .send({id: 1, name: 'guobin', age: 30})
            .end(function (err, res) {
                assert.equal(res.statusCode, 201);
                assert.equal(res.body.name, 'guobin');
                assert.equal(res.body.age, 30);
                done();
            });
    });
    it('index', function (done) {
        new User({name: 'guobin', age: 30}).save().then(function (user) {});

        request(app)
            .get('/users')
            .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                assert.ok(Array.isArray(res.body));
                done();
            });
    });
});
