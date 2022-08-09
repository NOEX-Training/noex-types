import { Asset } from './files';
import { Dmg, RecordElement } from './workouts';
export declare type PostWorkoutHistory = {
    creationDate: number;
    duration: number;
    performanceEmotionKey: string;
    performanceRateComment: string;
    prs: RecordElement[];
    startDate: number;
    title: string;
    workoutHistoryUid: string;
    workoutRateComment: string;
    workoutRateValue: number;
} & Dmg;
export declare type PostProgramBlockStarted = {
    averageWorkoutDuration: string;
    blockCoverUrls: Asset;
    /**
     * @description
     * The whole program's uid.
     */
    blockUid: string;
    creationDate: number;
    programCoverUrls: Asset;
    programType: string;
    /**
     * @description
     * The block's uid of the program.
     */
    programUid: string;
    workoutsPerWeek: string;
};
export declare type PostProgramBlockFinished = {};
export declare type PostType = 'programBlockFinished' | 'programBlockStarted' | 'workoutHistory';
export declare type PostContent<T> = T extends 'workoutHistory' ? PostWorkoutHistory : T extends 'programBlockFinished' ? PostProgramBlockFinished : T extends 'programBlockStarted' ? PostProgramBlockStarted : never;
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
