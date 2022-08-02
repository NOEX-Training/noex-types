export type PostWorkoutHistory = {
  creationDate: number;
  dmgAbs: number;
  dmgAdductor: number;
  dmgAbductor: number;
  dmgBiceps: number;
  dmgCore: number;
  dmgCalves: number;
  dmgForearms: number;
  dmgFrontDelt: number;
  dmgGlutes: number;
  dmgHamstrings: number;
  dmgLats: number;
  dmgLowerBack: number;
  dmgLowerChest: number;
  dmgNeck: number;
  dmgObliques: number;
  dmgQuads: number;
  dmgRearDelt: number;
  dmgRotatorCuff: number;
  dmgSideDelt: number;
  dmgTriceps: number;
  dmgUpperBack: number;
  dmgUpperChest: number;
  duration: number;
  starDate: number;
  title: string;
  workoutHistoryUid: string;
};

export type PostType = 'workoutHistory';
export type PostContent<T> = T extends 'workoutHistory'
  ? PostWorkoutHistory
  : never;

export type FollowedFeedPost<T extends PostType> = {
  content: PostContent<T>;
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
