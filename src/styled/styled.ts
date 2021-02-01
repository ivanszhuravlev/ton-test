import {Context} from 'react';
import baseStyled, {
  ReactNativeStyledInterface,
  ThemeContext as BaseThemeContext,
} from 'styled-components/native';

import {getThemeColors} from './colors';

export const THEME = {
  colors: getThemeColors(),
  constants: {},
  borderRadius: {},
};

export type ITheme = typeof THEME;
export const styled = baseStyled as ReactNativeStyledInterface<ITheme>;
export const ThemeContext = BaseThemeContext as Context<ITheme>;
