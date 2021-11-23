import { Asset } from './files';
export interface Post {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: string[];
    post?: string;
    sharedCameraPhoto?: Asset | null;
    sharedMedia?: Asset[] | null;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string;
    userUid: string;
    youtubeLink: string;
}
export interface Comment {
    comment: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: string[];
    postUid: string;
    reply: string | {
        reply: string;
        toUserName: string;
        toUserUid: string;
    };
    sharedCameraPhoto?: Asset | null;
    sharedMedia?: Asset[] | null;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string;
    userUid: string;
}
export interface Reply {
    commentUid: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: string[];
    postUid: string;
    reply: string | {
        reply: string;
        toUserName: string;
        toUserUid: string;
    };
    sharedCameraPhoto?: Asset | null;
    sharedMedia?: Asset[] | null;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string;
    userUid: string;
}
