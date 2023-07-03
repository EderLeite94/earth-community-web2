import type { ITheme } from '@ts/interfaces';

import { materialUiTheme } from '@styles/theme';

const { palette: { primary, tertiary, common, error } } = materialUiTheme;

export const resolveTheme = ({ $themeColor }: ITheme): string => {
  return $themeColor === 'white' ? common.white : primary.main;
};

export const resolveContrastTheme = ({ $themeColor }: ITheme): string => {
  return $themeColor === 'white' ? primary.main : common.white;
};

export const resolveErrorTheme = ({ $themeColor }: ITheme): string => {
  return $themeColor === 'white' ? tertiary.main : error.light;
};
