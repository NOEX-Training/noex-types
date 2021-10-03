export interface TagType {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    }
    key: string;
    name: string;
    tags?: {
        key: string;
        text: string;
        uid: string;
        value: string;
    }[];
    uid: string;
}