import { Post } from './questions';

export interface Notification {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    /**
     * @description
     * Only if comment the reaction.
     */
    commentContent?: string;
    /**
     * @description
     * Only if comment or reply the reaction.
     */
    commentIndex?: number;
    fromUserUid: string;
    isSeen: boolean;
    post: Post;
    /**
     * @description
     * Only if post.
     */
    postContent?: string;
    postIndex: number;
    reaction: 'trainerPost' | 'userPost' | 'like' | 'comment' | 'reply' | 'replyReply';
    reactionFromUserAvatar: string;
    reactionFromUserName: string;
    reactionType:
        | 'newTrainerPost'
        | 'newUserPost'
        | 'likeToPost'
        | 'commentToPost'
        | 'likeToComment'
        | 'replyToComment'
        | 'likeToReply'
        | 'replyToReply';
    /**
     * @description
     * Only if reply the reaction.
     */
    replyContent?:
        | string
        | {
              reply: string;
              toUserName: string;
              toUserUid: string;
          };
    /**
     * @description
     * Only if reply the reaction.
     */
    replyIndex: number;
    teamUid: string;
    toUserUid: string;
    uid: string;
}
