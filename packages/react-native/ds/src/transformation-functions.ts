export const getTransformedFontSizes = (
  baseFontSize: number,
  baseFontSizeTokens: Array<string>
) => {
  // stripping non-numerics off font sizes. Straight forward shrink for mobile
  // do a shrink/calculation? Or just map to whole new scale? But then lose control from root theme

  const mobileFontSizeTokens = baseFontSizeTokens.map((size: string) => {
    const num = Number(size.replace(/[^0-9.]/g, ''));
    return Math.round(num * baseFontSize);
  });

  return mobileFontSizeTokens;
};

interface FontTokens {
  [key: string]: string;
}
// Stripping out fallback fonts

// Different naming to communicate why it should be transformed this way for RN?
// getFirstFont? return firstFonts?
export const getTransformedFonts = (baseFonts: FontTokens) => {
  const fontKeys = Object.keys(baseFonts);
  const transformedFonts = {};

  fontKeys.forEach((font: any) =>
    Object.assign(transformedFonts, { [font]: baseFonts[font].split(',')[0] })
  );

  return transformedFonts;
};

interface LineHeightTokens {
  [key: string]: number;
}

export const getTransformedLineHeights = (
  baseLineHeights: LineHeightTokens,
  fontSizes: Array<number>
) => {
  const lineHeightKeys = Object.keys(baseLineHeights);
  let transformedLineHeights = {};

  lineHeightKeys.forEach(key => {
    Object.assign(transformedLineHeights, {
      [key]: fontSizes.map(fontSize => `${fontSize * baseLineHeights[key]}px`),
    });
  });

  return transformedLineHeights;
};
