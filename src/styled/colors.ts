import {Appearance} from 'react-native';

type Colors =
  | 'background'
  | 'highlight1'
  | 'highlight2'
  | 'disabled'
  | 'text'
  | 'textContrast'
  | 'textGrey'
  | 'gradientDark'
  | 'gradientLight'
  | 'shadowBig';

type IColorsMap = {
  [key in Colors]: string;
};

const COLORS_LIGHT: IColorsMap = {
  background: '#ffffff',
  highlight1: '#EB5757',
  highlight2: '#000000',
  disabled: '#CFD8DC',
  text: '#102027',
  textContrast: '#ffffff',
  textGrey: '#727C81',
  gradientDark: 'rgba(0, 0, 0, 0.8)',
  gradientLight: 'rgba(235, 87, 87, 0)',
  shadowBig: 'rgba(16, 32, 39, 0.16)',
};

const COLORS_DARK: IColorsMap = {
  background: '#ffffff',
  highlight1: '#EB5757',
  highlight2: '#000000',
  disabled: '#CFD8DC',
  text: '#102027',
  textContrast: '#ffffff',
  textGrey: '#727C81',
  gradientDark: 'rgba(0, 0, 0, 0.8)',
  gradientLight: 'rgba(235, 87, 87, 0)',
  shadowBig: 'rgba(16, 32, 39, 0.16)',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;
