import { DocumentReference } from '@firebase/firestore-types';

export interface UserChallenge {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    email: string;
    /**
     * @description
     * Only if challenge was closed.
     */
    endDate?: {
        nanoseconds: number;
        seconds: number;
    };
    name: string;
    startDate: {
        nanoseconds: number;
        seconds: number;
    };
    submitted: boolean;
    uid: string;
    userUid: string;
}

export interface TeamChallenge {
    challengers: {
        startDate: {
            nanoseconds: number;
            seconds: number;
        };
        name: string;
        reference: DocumentReference;
        userUid: string;
    }[];
    code: string;
    isChallengeActive: boolean;
    startDate: {
        nanoseconds: number;
        seconds: number;
    };
    title: string;
    uid: string;
}