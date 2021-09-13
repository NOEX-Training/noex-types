/**
 * @description
 * Workout/Exercise/Set object.
 */
interface WorkoutExerciseSet {
    checked: boolean;
    duration?: number | string;
    isMetric?: boolean;
    reps?: number | string;
    repsSuggestion?: string;
    restTime: number | string;
    rm?: number | string;
    rpe?: number | string;
    status: 'S' | 'F' | 'D' | 'W' | 'T' | 'P' | 'RP';
    weight?: number | string;
}

interface WorkoutExercise extends Exercise {
    exerciseNote?: string;
    exerciseSets?: Array<WorkoutExerciseSet>;
    isExerciseMetric?: boolean;
    isPulse?: boolean;
    note?: string;
    superSet?: number;
    tempo?: string;
    trainerNote?: string;
    youtubeLink: string;
}

interface Workout {
    blueprintTag: string;
    categoryUid?: string;
    createdBy: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    description?: string;
    duration: number;
    exercises: Array<WorkoutExercise>;
    gender: 'Male' | 'Female' | 'UniSex';
    id?: string;
    inspiredTag: string;
    isCore?: boolean;
    isDev?: boolean;
    sectionOrder: number;
    sectionUid: string;
    startDate?: number;
    tags: string[];
    title: string;
    uid: string;
    userUid?: string;
    workoutHeaderUrls: Asset;
    workoutNote: string;
    workoutThumbUrls: Asset;
    workoutType?: string;
    youtubeLink: string;
}

interface WorkoutHistory extends Omit<Workout, 'exercises'> {
    exercises: Array<WorkoutExercise>;
    isTemplate: boolean;
    originalWorkoutUid: string;
    /**@deprecated */
    start: number;
    performanceRateValue: number;
}

interface Dmg {
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

interface WorkoutRating {
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
