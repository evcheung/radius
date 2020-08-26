import React, { useContext } from 'react';
import { TranslatedThemeContext } from './theme-context';
import { ThemeProvider } from 'styled-components/native';
//@ts-ignore
export const RadiusThemeProvider = ({ children, theme }) => {
  const radius = useContext(TranslatedThemeContext);
  console.log('🍡🌮🍣  radius', radius);

  //@ts-ignore
  return <ThemeProvider theme={radius[theme]}>{children}</ThemeProvider>;
};
