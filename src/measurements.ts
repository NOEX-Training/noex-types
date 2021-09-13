interface Weight {
    key: string;
    value: number;
    text: string;
}

interface MeasurementState {
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

interface WeightLogData {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    imperial?: MeasurementState;
    metric?: MeasurementState;
    photoBack?: PhotoData;
    photoFront?: PhotoData;
    photoSide?: PhotoData;
    type: 'muscle' | 'weight';
    uid: string;
    userUid: string;
    weightImperial?: number;
    weightMetric?: number;
}

interface Height {
    key: string;
    value: number;
    text: string;
}

export enum PhotoTypes {
    back = 'back',
    front = 'front',
    side = 'side',
}

interface PhotoData {
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
