import { DocumentReference } from '@firebase/firestore-types';

declare module 'noex-types' {
    namespace NOEXTypes {
        interface Program {
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
        
        interface UserProgram extends Program {
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
            isLoaded: boolean;
            originalProgramUid: string;
            reference: DocumentReference;
        }
        
        interface ProgramWithSections extends Program {
            programSections?: Array<ProgramSection>;
        }
        
        interface ProgramWorkout extends Workout {
            doneWorkouts?: Array<{
                creationDate: {
                    nanoseconds: number;
                    seconds: number;
                };
                workoutUid: string;
            }>;
            fromHistory: boolean;
            originalWorkoutUid: string;
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
        
        interface ProgramSection {
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
            order: number;
            programSectionVideoUrls: Asset;
            programUid: string;
            sectionTitle: string;
            trainerUid: string;
            uid: string;
            userUid: string;
        }
        
        interface ProgramSectionWithWorkouts extends ProgramSection {
            workouts: Array<ProgramWorkout>;
        }
        
        /**@deprecated */
        interface Tier {
            key: number;
            title: string;
            programs: Array<Program>;
        }
    }
}