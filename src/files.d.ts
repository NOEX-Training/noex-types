import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
export interface Folder {
    creationDate: FirebaseFirestoreTypes.Timestamp;
    folderName: string;
    folderTitle: string;
    uid: string;
}
/**
 * @description
 * Uploaded file object.
 */
export interface Asset {
    downloadURL: string;
    fileData: {
        bucket?: string;
        contentDisposition?: string | null;
        contentEncoding?: string;
        contentType: 'video/mp4' | 'image/jpeg';
        dimensions?: {
            height: number;
            width: number;
        };
        fullPath: string;
        generation?: string;
        md5Hash?: string;
        metageneration?: string;
        name: string;
        size: number;
        timeCreated: string;
        type?: string;
        updated?: string;
    };
    /**
     * @description
     * Only if the trainer uploaded own video and it was denied.
     */
    isDenieded?: boolean;
    /**
     * @description
     * Only if the trainer uploaded own video.
     */
    isProcessed?: boolean;
    key: string;
    mirror?: {
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        key?: string;
    };
    /**
     * @description
     * If isDenieded is true.
     */
    reviewComment?: string;
    uid: string;
    videoAssetKey?: string;
}
/**
 * @description
 * Trainer file object.
 */
export interface TrainerFile {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    exerciseUid: string;
    manAssetsUrls?: Array<Asset>;
    posterImages?: Array<Asset>;
    teamUid: string;
    trainerUid: string;
    uid: string;
    womanAssetsUrls?: Array<Asset>;
}
/**
 * @description
 * Uploaded file object in team.
 */
export interface TeamFile {
    downloadURL: string;
    fileData: {
        contentType: string;
        creationDate: {
            nanoseconds: number;
            seconds: number;
        } | Date;
        dimensions: {
            height: number;
            width: number;
        };
        fullPath: string;
        name: string;
    };
    /**
     * @description
     * Only works for noex posts now.
     */
    key?: string;
    /**
     * @description
     * Only works for noex posts now.
     */
    mirror?: {
        Bucket: string;
        Key: string;
        Location: string;
        key: string;
    };
}
export interface WorkoutSummaryImage {
    creationDate: {
        nanosecond: number;
        seconds: number;
    };
    image: Asset;
    teamUid: string;
    trainerUid: string;
    uid: string;
}
