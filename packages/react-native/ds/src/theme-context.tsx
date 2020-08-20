import React from 'react';
import { default as translatedTheme } from './theme';

export const TranslatedThemeContext = React.createContext(translatedTheme);

export const TranslatedThemeContextProvider = ({ children }: any) => (
  <TranslatedThemeContext.Provider value={translatedTheme}>
    {children}
  </TranslatedThemeContext.Provider>
);
