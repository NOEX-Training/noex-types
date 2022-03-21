import {DocumentReference} from '@firebase/firestore-types';
import {Exercise} from './exercises';
import {Asset} from './files';

/**
 * @description
 * Workout/Exercise/Set object.
 */
export interface WorkoutExerciseSet {
  checked: boolean;
  duration?: number | string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  entityId?: string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  exerciseEntityId?: string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  exerciseId?: string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  exerciseIndex?: number;
  /**
   * @description
   * Only if Workout Log is active.
   */
  isMetric?: boolean;
  reps?: number | string;
  repsSuggestion?: string;
  restTime: number | string;
  rm?: number | string;
  rpe?: number | string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  setIndex?: number;
  status: 'S' | 'F' | 'D' | 'W' | 'T' | 'P' | 'RP';
  weight?: number | string;
}

export interface WorkoutExercise extends Exercise {
  exerciseNote?: string;
  exerciseSets?: WorkoutExerciseSet[];
  /**
   * @description
   * Only if Workout Log is active.
   */
  entityId?: string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  index?: number;
  isExerciseMetric?: boolean;
  isPulse?: boolean;
  note?: string;
  /**
   * @description
   * Only if Workout Log is active.
   */
  setEntityIds?: string[];
  superSet?: number;
  tempo?: string;
  trainerNote?: string;
  youtubeLink: string;
}

export interface Workout {
  blueprintTag: string;
  categoryUid?: string;
  createdBy: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  description?: string;
  /**
   * @description
   * Only if program workout.
   */
  doneWorkouts?: {
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    workoutUid: string;
  }[];
  duration: number;
  exercises: WorkoutExercise[];
  /**
   * @description
   * Only if program workout.
   */
  fromHistory?: boolean;
  gender: 'Male' | 'Female' | 'UniSex';
  id?: string;
  inspiredTag: string;
  isCore?: boolean;
  isDev?: boolean;
  /**
   * @deprecated
   * @description
   * Only if admin program forked.
   */
  originalProgramWorkoutReference?: DocumentReference;
  /**
   * @description
   * Only if admin program forked.
   */
  originalProgramWorkoutUid?: string;
  /**
   * @description
   * Only if trainer assigned the workout.
   * * Only if program-workout saved.
   */
  originalWorkoutUid?: string;
  /**
   * @description
   * Only if program workout.
   */
  parentWorkoutUid?: string;
  /**
   * @description
   * Only if program workout.
   */
  programUid?: string;
  /**
   * @description
   * Only if program workout.
   */
  start?: number;
  sectionOrder: number;
  sectionUid: string;
  startDate?: number;
  tags: string[];
  /**
   * @description
   * Only if trainer assigned the workout.
   */
  teamUid?: string;
  title: string;
  /**
   * @description
   * Only if trainer assigned the workout.
   */
  trainerUid?: string;
  uid: string;
  userUid?: string;
  workoutHeaderUrls: Asset;
  workoutNote: string;
  /**
   * @description
   * Only if program workout.
   */
  workoutNotes?: {
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    parentWorkoutUid: string;
    workoutNote: string;
    workoutUid: string;
  }[];
  workoutThumbUrls: Asset;
  workoutType?: string;
  youtubeLink: string;
}

export interface WorkoutSection {
  createdBy: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  order: number;
  sectionTitle: string;
  uid: string;
  userUid: string;
  workouts?: Workout[];
}

export interface WorkoutHistory extends Omit<Workout, 'exercises'> {
  exercises: Array<WorkoutExercise>;
  isTemplate: boolean;
  originalWorkoutUid: string;
  /**@deprecated */
  start: number;
  performanceRateValue: number;
}

export interface Dmg {
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
}

export interface WorkoutRating {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  comment: string;
  language: 'hu' | 'en';
  performanceRateValue: number;
  workoutHistoryId: string;
  workoutRateValue: number;
  workoutUid: string;
  uid: string;
  userReference: any;
  userProfilePicture: string;
  userUid: string;
}

export interface Cardio {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  caloriesBurned: number;
  duration: number;
  startDate: {
    nanoseconds: number;
    seconds: number;
  };
  type: string;
  uid: string;
}
