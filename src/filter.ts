import { ImageRequireSource } from 'react-native';

interface Filter {
    idx?: string;
    key: string;
    text: string;
    value: string;
    manThumb?: ImageRequireSource; // typedef ??
    womanThumb?: ImageRequireSource; // typedef ??
    empty?: boolean;
}

interface FilterTag {
    title: string;
    data: Array<Filter>;
}
