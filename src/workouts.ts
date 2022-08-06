import {DocumentReference} from '@firebase/firestore';
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
  /**
   * @description
   * Changed to Epoch Time in milliseconds.
   * Date: 2022.06.05.
   */
  creationDate: number;
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
  isTemplate: boolean;
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
   * @deprecated
   * Only if program workout.
   */
  start?: number;
  sectionOrder: number;
  sectionUid: string;
  /**
   * @description
   * When the user started the workout.
   */
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
  exercises: WorkoutExercise[];
  isTemplate: boolean;
  originalWorkoutUid: string;
  /**@deprecated */
  start: number;
  /**
   * @description
   * Emotion key for workout performance status.
   */
  performanceEmotionKey?: string;
  /**
   * @description
   * Only if the users wrote some rate about their the performance
   */
  performanceRateComment?: string;
  /**
   * @deprecated
   * 2022.08.03. this moved to the workout status field.
   */
  performanceRateValue: number;
  /**
   * @description
   * Only from 2022.08.03.
   * The records will be saved in a standalone collection,
   * because will be used on the followed feed.
   */
  prsReference?: string;
}

export type Dmg = {
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
};

export interface WorkoutRating {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  comment: string;
  language: 'hu' | 'en';
  /**
   * @deprecated
   */
  performanceRateValue: number;
  workoutHistoryId: string;
  workoutRateValue: number;
  workoutUid: string;
  uid: string;
  /**
   * @deprecated
   * 2022.08.02.
   */
  userReference: string;
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

export type RecordElement = {
  exerciseId: string;
  rm: number;
  duration: number;
  reps: number;
  volumen: number;
  weight: number;
  setEntityId: string;
  type:
    | 'reps'
    | 'volumen'
    | 'weight'
    | 'weight-reps'
    | 'weight-volumen'
    | 'reps-volumen'
    | 'weight-reps-volumen';
};

export type PrivateRecord = {
  creationDate: number;
  records: RecordElement[];
  uid: string;
  userUid: string;
  workoutHistoryUid: string;
  workoutHistoryReference: string;
};
