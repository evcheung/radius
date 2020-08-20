import React, { useContext } from 'react';
import { TranslatedThemeContext } from './theme-context';
import { ThemeProvider } from 'styled-components/native';
//@ts-ignore
export const RadiusThemeProvider = ({ children, theme }) => {
  const radius = useContext(TranslatedThemeContext);
  //@ts-ignore
  // console.log('🍡🌮🍣  radius', radius[theme].fonts.body);
  //@ts-ignore
  return <ThemeProvider theme={radius[theme]}>{children}</ThemeProvider>;
};
