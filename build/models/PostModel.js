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
var UserModel_1 = require("./UserModel");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "tableName", {
        get: function () {
            return 'posts';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "hasTimestamps", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Post.prototype.user = function () {
        return this.belongsTo(UserModel_1.User);
    };
    return Post;
}(bookshelf.Model));
exports.Post = Post;
