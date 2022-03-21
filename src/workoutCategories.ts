import {Asset} from './files';
import {Workout} from './workouts';

export interface WorkoutCategory {
  categoryTitle: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  description: string;
  isDev: boolean;
  link: string;
  order: number;
  uid: string;
  userUid: string;
}

// ez kompatibilis a user-sectionnel is
export interface WorkoutCategorySection {
  categoryTitle: string;
  categoryUid: string;
  createdBy: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  manCover: Asset;
  order: number;
  sectionTitle: string;
  uid: string;
  userUid: string;
  womanCover: Asset;
}

export interface WorkoutCategorySectionWithWorkouts
  extends WorkoutCategorySection {
  workouts: Array<Workout>;
}

export interface WorkoutCategorySectionWorkouts {
  isTeamCategory?: boolean;
  title: string;
  link: string;
  data: Array<WorkoutCategorySectionWithWorkouts>;
}
