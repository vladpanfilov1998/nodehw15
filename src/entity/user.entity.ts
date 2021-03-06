import {Column, Entity, OneToMany} from 'typeorm';

import {config} from '../config';
import {IComment, Comment} from './comment.entity';
import {CommonFields, ICommonFields} from './commonFields.entity';
import {IPost, Post} from './post.entity';

export interface IUser extends ICommonFields {
    firstName: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    avatar?: string;
    posts: IPost[];
    comments: IComment[];
}

@Entity('Users', {database: config.MYSQL_DATABASE_NAME})
export class User extends CommonFields implements IUser {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    lastName: string;

    @Column({
        type: 'int',
    })
    age?: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
    phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    password: string;

    @Column({
        type: 'varchar',
        width: 255,
    })
    avatar?: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}