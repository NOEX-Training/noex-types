import { Workout } from './workouts';

/**
 * @description
 * User object.
 */
export interface User {
    banned: boolean;
    birthday: {
        nanoseconds: number;
        seconds: number;
    };
    bodyfat: number;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    dmgAbductor: number;
    dmgAbs: number;
    dmgAdductor: number;
    dmgBiceps: number;
    dmgCalves: number;
    dmgCore: number;
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
    email: string;
    experience: 'Beginner' | 'Intermediate' | 'Professional';
    facebookProfilePictureUrl: {
        downloadURL: string;
        fileData: {
            contentType: string;
            dimensions: {
                height: number;
                width: number;
            };
            fullPath: string;
            name: string;
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
        };
    };
    fatLossValue: number;
    gender: 'Male' | 'Female';
    goal: Array<{
        key: string;
        text: string;
        value: number;
    }>;
    height: number;
    inAppPurchase: {
        isActive: boolean;
        tierLevel: number;
    };
    isDev: boolean;
    isMetric: boolean;
    /**
     * @deprecated
     * Only for trainers.
     */
    isSubTrainer?: boolean;
    isTrainer: boolean;
    isVip: boolean;
    isWebRegister: boolean;
    language: 'hu' | 'en';
    /**
     * @description
     * Only for trainers.
     */
    methods?: string[];
    muscleGainValue: number;
    name: string;
    statistics?: {
        /**
         * @description
         * In steps.
         */
        activityGoal?: number;
        /**
         * @description
         * In kCal.
         */
        caloriesGoal?: number;
        /**
         * @description
         * activity multiplier for calorie calulation
         */
        dailyActivityPAL: number;
        /**
         * @description
         * daily calorie deficit or sufficit for calorie calculation
         */
        nutritionGoal: number;
        /**
         * @description
         * In mins.
         */
        trainingTimeGoal?: number;
        /**
         * @description
         * kg or lbs depends on user settings.
         */
        weightGoal?: number;
    };
    stripeSubscription01: {
        isActive: boolean;
        tierLevel: number;
    };
    stripeSubscription02: {
        isActive: boolean;
        tierLevel: number;
    };
    /**
     * @description
     * Only for trainers.
     */
    teamUid?: string;
    trainCountGym: number;
    trainCountHome: number;
    uid: string;
    weight: number;
}

export interface UserWorkoutsSection {
    createdBy: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    order: number;
    sectionTitle: string;
    uid: string;
    userUid: string;
}

export interface UserSectionWithWorkouts extends UserWorkoutsSection {
    workouts: Array<Workout>;
}

/**@deprecated */
export interface UserWorkoutCategorySectionWorkouts {
    isTeamCategory?: boolean;
    title: string;
    link?: string;
    data: Array<UserSectionWithWorkouts>;
}

// teams
export interface UserTeam {
    connectionDate: {
        nanoseconds: number;
        seconds: number;
    };
    order: number;
    tierLevel: number;
    teamName: string;
    teamUid: string;
    trainer: string;
    trainerUid: string;
    uid: string;
}
