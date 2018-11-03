"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var request = require("supertest");
var app = require("../../app");
var UserModel_1 = require("../../models/UserModel");
var bookshelf = require("../../config/bookshelf");
beforeEach(function () {
    bookshelf.knex('posts').del().then(function () {
    });
    bookshelf.knex('users').del().then(function () {
    });
});
describe('UserController', function () {
    it('index', function (done) {
        UserModel_1.User.forge({ name: 'zhangsan', age: 30 }).save().then(function (user) {
            request(app)
                .get('/users')
                .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                assert.ok(Array.isArray(res.body));
                done();
            });
        });
    });
    it('show', function (done) {
        UserModel_1.User.forge({ name: 'zhangsan', age: 30 }).save().then(function (user) {
            request(app)
                .get('/users/' + user.id)
                .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.name, 'zhangsan');
                assert.equal(res.body.age, 30);
                done();
            });
        });
    });
    it('create', function (done) {
        request(app)
            .post('/users')
            .send({ id: 1, name: 'zhangsan', age: 30 })
            .end(function (err, res) {
            assert.equal(res.statusCode, 201);
            assert.equal(res.body.name, 'zhangsan');
            assert.equal(res.body.age, 30);
            done();
        });
    });
    it('update', function (done) {
        UserModel_1.User.forge({ name: 'zhangsna', age: 30 }).save().then(function (user) {
            request(app)
                .put('/users/' + user.id)
                .send({ name: 'lisi', age: 31 })
                .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.name, 'lisi');
                assert.equal(res.body.age, 31);
                done();
            });
        });
    });
    it('delete', function (done) {
        UserModel_1.User.forge({ name: 'zhangsna', age: 30 }).save().then(function (user) {
            request(app)
                .del('/users/' + user.id)
                .end(function (err, res) {
                assert.equal(res.statusCode, 200);
                done();
            });
        });
    });
});
