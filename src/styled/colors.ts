import {Appearance} from 'react-native';

type Colors = 'background' | 'highlight1' | 'highlight2' | 'disabled';

type IColorsMap = {
  [key in Colors]: string;
};

const COLORS_LIGHT: IColorsMap = {
  background: '#ffffff',
  highlight1: '#EB5757',
  highlight2: '#000000',
  disabled: '#CFD8DC',
};

const COLORS_DARK: IColorsMap = {
  background: '#ffffff',
  highlight1: '#EB5757',
  highlight2: '#000000',
  disabled: '#CFD8DC',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;
