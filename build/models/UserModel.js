"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelf = require("../config/bookshelf");
var PostModel_1 = require("./PostModel");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "tableName", {
        get: function () {
            return 'users';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hasTimestamps", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.posts = function () {
        return this.hasMany(PostModel_1.Post);
    };
    return User;
}(bookshelf.Model));
exports.User = User;
