import { ImageRequireSource } from "react-native";

declare module 'noex-types' {
    namespace NOEXTypes {

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
            data: Array<Filter>
        }
    }
}