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
    /**
     * @description
     * The number of the followers the user has in the community module.
     */
    followersCount?: number;
    /**
     * @description
     * The number of the following the user has in the community module.
     */
    followingCount?: number;
    gender: 'Male' | 'Female' | 'UniSex';
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
    /**
     * @description
     * Only if the user in the challenge.
     */
    isInChallenge?: boolean;
    isMetric: boolean;
    /**
     * @description
     * Only if download the app first without registering on the userweb.
     */
    isNewUser?: boolean;
    /**
     * @deprecated
     * Only for trainers.
     */
    isSubTrainer?: boolean;
    /**
     * @description
     * Only if user is a support user.
     */
    isSupport?: boolean;
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
    /**
     * @description
     * Check the loaded programs per monthy.
     * Default 0. Max value 2.
     */
    monthlyLoadedProgram?: number;
    name: string;
    /**
     * @description
     * Notification settings for the user.
     */
    notificationSettings: {
        getMessage: boolean;
        getCommentOnPost: boolean;
        getReplyOnComment: boolean;
        getLike: boolean;
        newPost: boolean;
        newTrainerPost: boolean;
        restTimeIsOver: boolean;
        workoutIsOver: boolean;
        newProgramIsPublished: boolean;
        newGuideIsPublished: boolean;
        newRecipeIsPublished: boolean;
    };
    statistics?: {
        /**
         * @description
         * In steps.
         */
        activityGoal?: number;
        /**
         * @description
         * Bodyfat goal.
         */
        bodyfatGoal?: number;
        /**
         * @description
         * Cardio goal, default 150 mins.
         */
        cardioGoal?: number;
        /**
         * @description
         * Calculated calories
         * TDEE = BMR * PAL
         * NEAT = TDEE + nutritionGoal
         * Calorie = NEAT + trainingTimeGoal[horus] * 250 / 7
         */
        calculatedCalories?: number;
        /**
         * @description
         * In kCal.
         */
        caloriesGoal?: number;
        /**
         * @description
         * Carbs of macros.
         */
        carbohydrates?: number;
        /**
         * @description
         * activity multiplier for calorie calulation
         */
        dailyActivityPAL?: number;
        /**
         * @description
         * dietary preference from a list: ['Balanced', 'Low-carb', 'High-carb', 'High-protein', 'Ketogenic', 'Custom']
         */
        diateryPreference?: number;
        /**
         * @description
         * Fat of marcos.
         */
        fat?: number;
        /**
         * @description
         * daily calorie deficit or sufficit for calorie calculation
         */
        nutritionGoal?: number;
        /**
         * @description
         * Protein of marcos.
         */
        protein?: number;
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
    /**
     * @description
     * Only if user paid for the challenge item
     */
    stripeChallenge?: {
        isActive: boolean;
        tierLevel: number;
    };
    stripeSubscription01: {
        isActive: boolean;
        tierLevel: number;
    };
    stripeSubscription02: {
        isActive: boolean;
        tierLevel: number;
    };
    teamName?: string;
    teamUid?: string;
    /**
     * @description
     * Notification token.
     */
    token?: string;
    /**
     * @description
     * trainCountHome & trainCountGym were merged.
     */
    trainCount: number;
    /**
     * @deprecated
     */
    trainCountGym: number;
    /**
     * @deprecated
     */
    trainCountHome: number;
    /**
     * @description
     * Only for users if is a member of a team.
     */
    trainerUid?: string;
    uid: string;
    weight: number;
    /**
     * @description
     * Done workout histories for community on the profile screen.
     */
    workoutsCount?: number;
    workoutsLast7Days?: number;
    workoutsLast30Days?: number;
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
export interface UserAppOpen {
    connectionDate: {
        nanoseconds: number;
        seconds: number;
    };
    logs: string[];
    uid: string;
}
