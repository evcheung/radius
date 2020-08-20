import theme from '@radius/theme';

const fontSizes = [
  '10px',
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '28px',
  '34px',
  '46px',
  '60px',
];
const lineHeights = {
  solid: '16px',
  title: '42px',
  copy: '22px',
};

const translatedTheme = {
  light: {
    ...theme.light,
    fonts: {
      ...theme.light.fonts,
      body: 'Menlo',
    },
    fontSizes,
    lineHeights,
  },
  dark: {
    ...theme.dark,
    fonts: {
      ...theme.dark.fonts,
      body: 'Arial',
    },
    fontSizes,
    lineHeights,
  },
};

export default translatedTheme;
