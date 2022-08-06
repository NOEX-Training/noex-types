import { Asset } from './files';
import { Dmg } from './workouts';
export declare type PostWorkoutHistory = {
    creationDate: number;
    duration: number;
    startDate: number;
    title: string;
    workoutHistoryUid: string;
} & Dmg;
export declare type PostProgramStarted = {};
export declare type PostProgramFinished = {};
export declare type PostType = 'programFinished' | 'programStarted' | 'workoutHistory';
export declare type PostContent<T> = T extends 'workoutHistory' ? PostWorkoutHistory : T extends 'programFinished' ? PostProgramFinished : T extends 'programStarted' ? PostProgramStarted : never;
export declare type FollowedFeedPost<T extends PostType> = {
    content: PostContent<T>;
    creationDate: number;
    creator: string;
    creatorGender: 'Male' | 'Female';
    creatorPhoto: Asset;
    creatorUid: string;
    isPublic: boolean;
    postUid: string;
    type: PostType;
    uid: string;
};
