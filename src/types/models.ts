export interface IPost {
    id: string;
    createdAt: string | number;
    image?: string;
    images?: string[];
    video?: string;
    description: string;
    user: IUser;
    nofComments: number;
    nofLikes: number;
    comments: IComment;
}

export interface IUser {
    id: string;
    username: string;
    image?: string;
    name: string;
    bio?: string;
    posts?: IPost;
    website?: string;
}

export interface IComment {
    [x: string]: any;
    id: string;
    comment: string;
    user: IUser;
}