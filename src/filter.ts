import {ImageRequireSource} from 'react-native';

export interface Filter {
  idx?: string;
  key: string;
  text: string;
  value: string;
  manThumb?: ImageRequireSource; // typedef ??
  womanThumb?: ImageRequireSource; // typedef ??
  empty?: boolean;
}

export interface FilterTag {
  title: string;
  data: Array<Filter>;
}
