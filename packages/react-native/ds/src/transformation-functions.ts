export const getTransformedFontSizes = (
  baseFontSize: number,
  baseFontSizeTokens: Array<string>
) => {
  // stripping non-numerics off font sizes

  const numericFontSizes = baseFontSizeTokens.map((size: string) => {
    const num = Number(size.replace(/[^0-9.]/g, ''));
    return Math.round(num * baseFontSize);
  });

  return numericFontSizes;
};

interface FontTokens {
  [key: string]: string;
}
// Stripping out fallback fonts
export const getTransformedFonts = (baseFonts: FontTokens) => {
  const fontKeys = Object.keys(baseFonts);
  const firstFonts = {};

  fontKeys.forEach((font: any) =>
    Object.assign(firstFonts, { [font]: baseFonts[font].split(',')[0] })
  );

  return firstFonts;
};

interface LineHeightTokens {
  [key: string]: number;
}

export const getTransformedLineHeights = (
  baseLineHeights: LineHeightTokens,
  fontSizes: Array<number>
) => {
  const lineHeightKeys = Object.keys(baseLineHeights);
  let generatedPixelLineHeights = {};

  lineHeightKeys.forEach(key => {
    Object.assign(generatedPixelLineHeights, {
      [key]: fontSizes.map(fontSize => `${fontSize * baseLineHeights[key]}px`),
    });
  });

  return generatedPixelLineHeights;
};
