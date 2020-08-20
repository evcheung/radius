import React from 'react';
import {
  Box,
  RadiusThemeProvider,
  TranslatedThemeContextProvider,
} from '../src';

const ThemeDecorator = (storyFn: any) => (
  <TranslatedThemeContextProvider>
    <RadiusThemeProvider theme={'light'}>
      <Box bg="bg.primary" px={4} py={5} width="100%" mb={4}>
        {storyFn({ id: id => 'light-' + id })}
      </Box>
    </RadiusThemeProvider>
    <RadiusThemeProvider theme={'dark'}>
      <Box bg="bg.primary" px={4} py={5} width="100%">
        {storyFn({ id: id => 'dark-' + id })}
      </Box>
    </RadiusThemeProvider>
  </TranslatedThemeContextProvider>
);

export default ThemeDecorator;
