declare module 'noex-types' {
    namespace NOEXTypes {
        /**
         * @description
         * The Exercise object.
         */
         interface Exercise {
            creationDate: {
                seconds: number;
                nanoseconds: number;
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
            equipmentType: string;
            equipmentUrls: Asset;
            exerciseNumber: string;
            exerciseType: string;
            femaleOpen: number;
            id?: string;
            isCore: boolean;
            isDev: boolean;
            lateralType: string;
            levelType: string;
            mainMuscleType: string;
            maleOpen: number;
            manAssetsUrls?: Array<Asset>;
            manThumbsUrls: Asset;
            muscleManThumbsUrls: Asset;
            muscleWomanThumbsUrls: Asset;
            mechanismType: string;
            movementType: string;
            posterImagesMan?: Array<Asset>;
            posterImagesWoman?: Array<Asset>;
            setType: 'WRR' | 'RR' | 'DR';
            shortInfo: string;
            shortInfoEn: string;
            similarExerciseType: string;
            similarNames?: string;
            similarNamesEn?: string;
            similarNamesGeneratedHu?: string;
            similarNamesGeneratedEn?: string;
            supportedType: string;
            tags: string[];
            title: string;
            titleEn: string;
            uid: string;
            womanAssetsUrls?: Array<Asset>;
            womanThumbsUrls: Asset;
            youtubeLinks?: Array<{
                link?: string;
                start?: string;
            }>;
        }

        interface ExerciseDescriptionElement {
            type: 'text' | 'richText' | 'youtubeLink' | 'fileUploader' | 'textUrl';
            title: string;
            id: string;
            index?: number;
            text?: string;
            richText?: string;
            url?: string;
            youtubeLinks?: Array<ExerciseYoutubeLink>;
            images?: Array<Asset>;
        }

        /**
         * @description
         * Exercise-History object.
         */
        interface ExerciseHistory {
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
            exerciseSets: Array<Set>;
            exerciseUid: string;
            uid: string;
            userUid: string;
            workoutUid: string;
        }

        /**
         * @description
         * Attached youtube link object.
         */
        interface ExerciseYoutubeLink {
            link: string;
            start: string;
        }
    }
}