import { DocumentReference } from '@firebase/firestore-types';
import { Asset } from './files';
import { Workout } from './workouts';
export interface Program {
    createdBy: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    description: string;
    gender: 'Male' | 'Female' | 'UniSex';
    isCore?: boolean;
    isDev: boolean;
    isTemplate: boolean;
    level: 'Grandma' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro' | 'Hulk';
    location: string;
    measurementInfo: string;
    order: number;
    /**
     * @description
     * Only if admin program forked.
     */
    originalProgramReference?: DocumentReference;
    programCoverUrls: Asset;
    programHeaderUrls: Asset;
    programVideoUrls: Asset;
    shortInfo: string;
    tags: string[];
    teamUid: string;
    tierLevel: number;
    title: string;
    trainerUid: string;
    type: string;
    uid: string;
}
export interface UserProgram extends Program {
    /**
     * @description
     * Only if program was completed.
     */
    completedDate?: {
        nanoseconds: number;
        seconds: number;
    };
    doneWorkouts: Array<{
        creationDate: {
            nanoseconds: number;
            seconds: number;
        };
        workoutUid: string;
    }>;
    doneSections: Array<{
        creationDate: {
            nanoseconds: number;
            seconds: number;
        };
        sectionUid: string;
    }>;
    /**
     * @description
     * Only if user completed the whole program.
     */
    endingCondition?: DocumentReference;
    /**
     * @description
     * Only if user completed the whole program.
     */
    isCompleted?: boolean;
    isLoaded: boolean;
    originalProgramUid: string;
    reference: DocumentReference;
    /**
     * @description
     * Only if user added the starting condition log.
     */
    startingCondition?: DocumentReference;
}
export interface ProgramWithSections extends Program {
    programSections?: Array<ProgramSection>;
}
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
