import { Dmg } from './workouts';
export declare type PostWorkoutHistory = {
    creationDate: number;
    duration: number;
    starDate: number;
    title: string;
    workoutHistoryUid: string;
} & Dmg;
export declare type PostProgramStarted = {};
export declare type PostProgramFinished = {};
export declare type PostType = 'programFinished' | 'programStarted' | 'workoutHistory';
export declare type PostContent<T> = T extends 'workoutHistory' ? PostWorkoutHistory : T extends 'programFinished' ? PostProgramFinished : T extends 'programStarted' ? PostProgramStarted : never;
export declare type FollowedFeedPost = {
    content: PostContent<PostType>;
    creationDate: number;
    creator: string;
    creatorGender: 'Male' | 'Female';
    creatorPhoto: string;
    creatorUid: string;
    isPublic: boolean;
    postUid: string;
    type: PostType;
    uid: string;
};
