import theme, * as baseTokens from '@radius/theme';
import { getTransformedLineHeights } from './transformation-functions';
import {
  getTransformedFonts,
  getTransformedFontSizes,
} from './transformation-functions';

// export default pipe(
//     getTransformedA,
//     getTransformedB,
//     getTransformedC,
//     getTransformedD
//   )(theme);

// should we do an adaptater/transformation layer for every token? Interface to map A to B

const baseFontSize = 16;

const translatedTheme = {
  light: {
    ...theme.light,
    fonts: getTransformedFonts(baseTokens.fonts),
    fontSizes: getTransformedFontSizes(baseFontSize, baseTokens.fontSizes),
    lineHeights: getTransformedLineHeights(
      baseTokens.lineHeights,
      getTransformedFontSizes(baseFontSize, baseTokens.fontSizes)
    ),
  },
  dark: {
    ...theme.dark,
    fonts: getTransformedFonts(baseTokens.fonts),
    fontSizes: getTransformedFontSizes(baseFontSize, baseTokens.fontSizes),
    lineHeights: getTransformedLineHeights(
      baseTokens.lineHeights,
      getTransformedFontSizes(baseFontSize, baseTokens.fontSizes)
    ),
  },
  //   test: {
  //   },
};

export default translatedTheme;
