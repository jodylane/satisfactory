import { lighten, darken, getContrast } from 'polished';

/**
 * returns colors with assigned contrasted font colors for what should be assigned for
 * the font color if that color is the background color to ensure we are keeping our colors accessible
 */
export const buildContrastMap = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => {
      const darkFont = getContrast(value, colors.black);
      const lightFont = getContrast(value, colors.white);

      const contrastColor = darkFont > lightFont ? colors.black : colors.white;
      const contrastColorScore = darkFont > lightFont ? darkFont : lightFont;
      return {
        contrastColor,
        contrastColorScore,
        key,
        value,
      };
    })
    .reduce((accumulator, { key, contrastColor, value }) => {
      return { ...accumulator, [key]: { contrastColor, value } };
    }, {});
};

/**
 * take a group of original colors & returns light & dark versions of them alongside our original colors
 */

export const buildColors = (colors) => {
  const newColors = { ...colors };
  for (const [key, value] of Object.entries(newColors)) {
    newColors[`${key}Light`] = lighten(0.35, value);
    newColors[`${key}Dark`] = darken(0.2, value);
  }

  return newColors;
};

/**
 * groups all contrasted colors by original color values
 * orders colors in light, original, dark format
 * filters out null values
 * returns array of properly sorted colors swatches for displaying later
 */
export const buildSwatches = (baseColors, contrastColors) => {
  const newColors = {};

  for (const baseKey of Object.keys(baseColors)) {
    newColors[baseKey] = [];

    for (const [key, color] of Object.entries(contrastColors)) {
      if (key.includes(baseKey)) {
        newColors[baseKey].push({ key: key, ...color });
      }
    }
  }

  const formattedColors = Object.entries(newColors)
    .reduce((accumulator, [_unusedKey, array]) => {
      return [...accumulator, ...array];
    }, [])
    .filter((color) => color);

  return formattedColors;
};
