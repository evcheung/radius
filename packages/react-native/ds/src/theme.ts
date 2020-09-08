import theme, * as baseTokens from '@radius/theme';
import { getTransformedLineHeights } from './transformation-functions';
import {
  getTransformedFonts,
  getTransformedFontSizes,
} from './transformation-functions';

const translatedTheme = {
  light: {
    ...theme.light,
    baseFontSize: baseTokens.baseFontSize,
    fonts: getTransformedFonts(baseTokens.fonts),
    fontSizes: getTransformedFontSizes(
      baseTokens.baseFontSize,
      baseTokens.fontSizes
    ),
    lineHeights: getTransformedLineHeights(
      baseTokens.lineHeights,
      getTransformedFontSizes(baseTokens.baseFontSize, baseTokens.fontSizes)
    ),
  },
  dark: {
    ...theme.dark,
    baseFontSize: baseTokens.baseFontSize,
    fonts: getTransformedFonts(baseTokens.fonts),
    fontSizes: getTransformedFontSizes(
      baseTokens.baseFontSize,
      baseTokens.fontSizes
    ),
    lineHeights: getTransformedLineHeights(
      baseTokens.lineHeights,
      getTransformedFontSizes(baseTokens.baseFontSize, baseTokens.fontSizes)
    ),
  },
};

export default translatedTheme;
