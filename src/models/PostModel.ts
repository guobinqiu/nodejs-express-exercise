import * as bookshelf from '../config/bookshelf';
import * as Bookshelf from 'bookshelf';
import {User} from './UserModel';

export class Post extends bookshelf.Model<Post> {
    get tableName() {
        return 'posts';
    }

    get hasTimestamps() {
        return true;
    }

    user(): Bookshelf.Model<User> {
        return this.belongsTo(User);
    }
}
