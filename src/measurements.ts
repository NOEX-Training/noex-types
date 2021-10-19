export interface Weight {
    key: string;
    value: number;
    text: string;
}

export interface MeasurementState {
    neck: string;
    shoulder: string;
    rightBiceps: string;
    leftBiceps: string;
    chest: string;
    rightForearm: string;
    leftForearm: string;
    abs: string;
    waist: string;
    hips: string;
    rightThigh: string;
    leftThigh: string;
    rightKnee: string;
    leftKnee: string;
    rightCalf: string;
    leftCalf: string;
}

export interface WeightLogData {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    /**
     * @description
     * Only if the user checked in from the challenge checkin form.
     */
    firstChallengeCheckIn?: boolean;
    /**
     * @description
     * Only if sent body measurements.
     */
    imperial?: MeasurementState;
    /**
     * @description
     * Only if sent body measurements.
     */
    metric?: MeasurementState;
    photoBack?: PhotoData;
    photoFront?: PhotoData;
    photoSide?: PhotoData;
    type: 'muscle' | 'weight';
    uid: string;
    userUid: string;
    /**
     * @description
     * Only if sent weight data or challenge checkin.
     */
    weightImperial?: number;
    /**
     * @description
     * Only if sent weight data or challenge checkin.
     */
    weightMetric?: number;
}

export interface Height {
    key: string;
    value: number;
    text: string;
}

export enum PhotoTypes {
    back = 'back',
    front = 'front',
    side = 'side',
}

export interface PhotoData {
    downloadURL: string;
    fileData: {
        contentType: string;
        dimensions: {
            height: number;
            width: number;
        };
        fullPath: string;
        name: string;
        creationDate: any;
    };
}
