import {Asset} from './files';
import {Dmg} from './workouts';

export type PostWorkoutHistory = {
  creationDate: number;
  duration: number;
  starDate: number;
  title: string;
  workoutHistoryUid: string;
} & Dmg;

export type PostProgramStarted = {};
export type PostProgramFinished = {};

export type PostType = 'programFinished' | 'programStarted' | 'workoutHistory';
export type PostContent<T> = T extends 'workoutHistory'
  ? PostWorkoutHistory
  : T extends 'programFinished'
  ? PostProgramFinished
  : T extends 'programStarted'
  ? PostProgramStarted
  : never;

export type FollowedFeedPost<T extends PostType> = {
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
