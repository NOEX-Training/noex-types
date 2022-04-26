import {DocumentReference} from '@firebase/firestore';
import {Asset} from './files';
import {Workout} from './workouts';

export interface Program {
  /**
   * @description
   * Average time for workouts.
   */
  averageWorkoutDuration?: string;
  /**
   * @description
   * Only if the program is in container.
   */
  blockUid?: string;
  /**
   * @description
   * Only if program was completed.
   * Only for users.
   */
  completedDate?: {
    nanoseconds: number;
    seconds: number;
  };
  createdBy: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  description: string;
  /**
   * @description
   * Only for users.
   */
  doneWorkouts?: Array<{
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    workoutUid: string;
  }>;
  /**
   * @description
   * Only for users.
   */
  doneSections?: Array<{
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    sectionUid: string;
  }>;
  /**
   * @description
   * Only for users.
   * Only if user completed the whole program.
   */
  endingCondition?: DocumentReference;
  gender: 'Male' | 'Female' | 'UniSex';
  /**
   * @description
   * Only for users.
   * Only if user completed the whole program.
   */
  isCompleted?: boolean;
  /**
   * @description
   * Only for users.
   * Only if loaded during a challenge.
   */
  isChallengeProgram?: boolean;
  isCore?: boolean;
  isDev: boolean;
  /**
   * @description
   * Only if for users if loaded the program.
   */
  isLoaded?: boolean;
  isTemplate: boolean;
  language: 'en' | 'hu';
  level: 'Grandma' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro' | 'Hulk';
  location: string;
  measurementInfo: string;
  order: number;
  /**
   * @description
   * Only if admin program forked.
   */
  originalProgramReference?: DocumentReference;
  /**
   * @description
   * Only if admin program forked or user loaded the program..
   */
  originalProgramUid?: string;
  programCoverUrls: Asset;
  programHeaderUrls: Asset;
  programType?: string;
  programVideoUrls: Asset;
  reference?: DocumentReference;
  shortInfo: string;
  /**
   * @description
   * Only for users.
   * Only if user added the starting condition log.
   */
  startingCondition?: DocumentReference;
  tags: string[];
  /**
   * @description
   * Only for users.
   * Only if loaded during a challenge.
   */
  teamChallengeReference: DocumentReference;
  /**
   * @description
   * Only if teamProgram
   */
  teamUid?: string;
  /**
   * @description
   * Only if program is active in any team.
   */
  teamUids?: string[];
  tierLevel: number;
  title: string;
  trainerUid: string;
  type: string;
  uid: string;
  /**
   * @description
   * Only for users if they are in challenge mode.
   */
  userChallengeReference?: DocumentReference;
  workoutsPerWeek?: string;
}

export interface ProgramWithSections extends Program {
  programSections?: Array<ProgramSection>;
}

/**
 * @deprecated
 * 2022.02.24.
 */
export interface ProgramWorkout extends Workout {
  doneWorkouts?: Array<{
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    workoutUid: string;
  }>;
  fromHistory: boolean;
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
   * Only if program-workout saved.
   */
  originalWorkoutUid?: string;
  parentWorkoutUid?: string;
  programUid: string;
  start?: number;
  trainerUid: string;
  userUid: string;
  workoutNotes: Array<{
    creationDate: {
      nanoseconds: number;
      seconds: number;
    };
    parentWorkoutUid: string;
    workoutNote: string;
    workoutUid: string;
  }>;
}

export interface ProgramSection {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  description?: string;
  order: number;
  /**
   * @description
   * Only if admin program forked.
   */
  originalProgramSectionReference?: DocumentReference;
  /**
   * @description
   * Only if admin program forked.
   */
  originalProgramSectionUid?: string;
  programSectionVideoUrls: Asset;
  programUid: string;
  sectionTitle: string;
  trainerUid: string;
  uid: string;
  userUid: string;
}

export interface ProgramSectionWithWorkouts extends ProgramSection {
  workouts: Array<ProgramWorkout>;
}

/**@deprecated */
export interface Tier {
  key: number;
  title: string;
  programs: Array<Program>;
}

export interface ProgramBlock {
  blockCoverUrls?: Asset;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  description: string;
  gradientColor: string;
  language: 'en' | 'hu';
  level: 'Grandma' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro' | 'Hulk';
  location: 'gym' | 'home';
  programUids: string[];
  title: string;
  uid: string;
}
