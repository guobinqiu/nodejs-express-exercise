import * as bookshelf from '../config/bookshelf';
import * as Bookshelf from 'bookshelf';
import {Post} from './PostModel';

export class User extends bookshelf.Model<User> {
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }

    posts(): Bookshelf.Collection<Post> {
        return this.hasMany(Post);
    }
}
