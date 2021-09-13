import { ImageRequireSource } from 'react-native';
export interface Filter {
    idx?: string;
    key: string;
    text: string;
    value: string;
    manThumb?: ImageRequireSource;
    womanThumb?: ImageRequireSource;
    empty?: boolean;
}
export interface FilterTag {
    title: string;
    data: Array<Filter>;
}
