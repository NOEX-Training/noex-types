import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
export interface TeamLeaderBoard {
    [key: string]: {
        creationDate: FirebaseFirestoreTypes.Timestamp;
        cardioGoal: number;
        cardio7: {
            duration: number;
            percent: number;
        };
        cardio30: {
            duration: number;
            percent: number;
        };
        facebookProfilePictureUrl: string;
        isInChallenge: boolean;
        isTrainer: boolean;
        name: string;
        trainCount: number;
        uid: string;
        workoutsLast7Days: number;
        workoutsLast30Days: number;
    };
}
