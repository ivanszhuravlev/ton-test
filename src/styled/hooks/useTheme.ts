import {useContext} from 'react';
import {ThemeContext} from '../styled';

export const useTheme = () => {
  return useContext(ThemeContext);
};
