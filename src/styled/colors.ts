import {Appearance} from 'react-native';

type Colors =
  | 'background'
  | 'highlight1'
  | 'highlight2'
  | 'disabled'
  | 'text'
  | 'textContrast';

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
};

const COLORS_DARK: IColorsMap = {
  background: '#ffffff',
  highlight1: '#EB5757',
  highlight2: '#000000',
  disabled: '#CFD8DC',
  text: '#102027',
  textContrast: '#ffffff',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;
