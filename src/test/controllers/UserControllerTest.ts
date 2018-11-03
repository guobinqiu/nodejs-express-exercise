import * as assert from 'assert';
import * as request from 'supertest';
import * as app from '../../app';
import {User} from '../../models/UserModel';
import * as bookshelf from '../../config/bookshelf';

beforeEach(() => {
    bookshelf.knex('posts').del().then(() => {
    });
    bookshelf.knex('users').del().then(() => {
    });
});

describe('UserController', () => {
    it('index', function (done) {
        User.forge({name: 'zhangsan', age: 30}).save().then((user) => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    assert.equal(res.statusCode, 200);
                    assert.ok(Array.isArray(res.body));
                    done();
                });
        });
    });
    it('show', function (done) {
        User.forge({name: 'zhangsan', age: 30}).save().then((user) => {
            request(app)
                .get('/users/' + user.id)
                .end((err, res) => {
                    assert.equal(res.statusCode, 200);
                    assert.equal(res.body.name, 'zhangsan');
                    assert.equal(res.body.age, 30);
                    done();
                });
        });
    });
    it('create', (done) => {
        request(app)
            .post('/users')
            .send({id: 1, name: 'zhangsan', age: 30})
            .end((err, res) => {
                assert.equal(res.statusCode, 201);
                assert.equal(res.body.name, 'zhangsan');
                assert.equal(res.body.age, 30);
                done();
            });
    });
    it('update', function (done) {
        User.forge({name: 'zhangsna', age: 30}).save().then((user) => {
            request(app)
                .put('/users/' + user.id)
                .send({name: 'lisi', age: 31})
                .end((err, res) => {
                    assert.equal(res.statusCode, 200);
                    assert.equal(res.body.name, 'lisi');
                    assert.equal(res.body.age, 31);
                    done();
                });
        });
    });
    it('delete', function (done) {
        User.forge({name: 'zhangsna', age: 30}).save().then((user) => {
            request(app)
                .del('/users/' + user.id)
                .end((err, res) => {
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });
    });
});
