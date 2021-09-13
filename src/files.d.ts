/**
 * @description
 * Uploaded file object.
 */
export interface Asset {
    downloadURL: string;
    fileData: {
        bucket: string;
        contentDisposition: string;
        contentEncoding: string;
        contentType: 'video/mp4' | 'image/jpeg';
        fullPath: string;
        generation: string;
        md5Hash: string;
        metageneration: string;
        name: string;
        size: number;
        creationDate: string;
        type: string;
        updated: string;
    };
    key: string;
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
