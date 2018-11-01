var assert = require('assert');
var request = require('supertest');
var app = require('../../src/app.js');

beforeEach(function () {
    console.log('simulate clear db');
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
        console.log('simulate insert an user');
        request(app)
            .get('/users')
            .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                assert.ok(Array.isArray(res.body));
                done();
            });
    });
});
