import { Asset } from './files';
/**
 * @description
 * Discovery Tile object.
 */
export interface DiscoveryContent {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    image?: Asset;
    isActive: boolean;
    text?: string;
    textEn?: string;
    uid: string;
    updateDate: {
        nanoseconds: number;
        seconds: number;
    };
}
