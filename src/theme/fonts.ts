import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 15,
  md: 20,
  lg: 25,
  xlg: 30,
  xxlg: 35,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
