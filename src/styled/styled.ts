import {Context} from 'react';
import baseStyled, {
  ReactNativeStyledInterface,
  ThemeContext as BaseThemeContext,
} from 'styled-components/native';

import {getThemeColors} from './colors';

export const THEME = {
  colors: getThemeColors(),
  constants: {},
  borderRadius: {
    card: 8,
  },
  fonts: {
    medium: 'IBMPlexSans-Medium',
    regular: 'IBMPlexSans',
  },
  fontSize: {
    button: 16,
    info: 14,
    title: 18,
    titleBig: 18,
  },
};

export type ITheme = typeof THEME;
export const styled = baseStyled as ReactNativeStyledInterface<ITheme>;
export const ThemeContext = BaseThemeContext as Context<ITheme>;
