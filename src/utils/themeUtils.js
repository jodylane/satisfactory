import { lighten, darken, getContrast } from 'polished';

/**
 * returns colors with assigned contrasted font colors for what should be assigned for
 * the font color if that color is the background color to ensure we are keeping our colors accessible
 */
export const buildContrastMap = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => {
      if (key === 'transparent')
        return { key, value, contrastColor: colors.black, contrasColorsScore: 100 };
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
    .filter((color) => color)
    .reduce((accumulator, { key, contrastColor, value }) => {
      return { ...accumulator, [key]: { contrastColor, value } };
    }, {});
};

const shorthandToLonghand = (color) => {
  // Check if the color is a shorthand hex color (3 or 4 digits)
  const shorthandRegex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/;
  const shorthandWithAlphaRegex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/;

  if (shorthandRegex.test(color) || shorthandWithAlphaRegex.test(color)) {
    // Extract the individual components
    const [, r, g, b, a] = color.match(shorthandWithAlphaRegex);

    // Return the longhand form
    if (a) {
      return `#${r}${r}${g}${g}${b}${b}${a}${a}`;
    } else {
      return `#${r}${r}${g}${g}${b}${b}`;
    }
  }

  // Return the input color if it's already in longhand form
  return color;
};

/**
 * take a group of original colors & returns light & dark versions of them alongside our original colors
 */

export const buildColorMap = (colors) => {
  const newColors = { ...colors };
  for (const [key, value] of Object.entries(newColors)) {
    for (const index of [...new Array(8)].keys()) {
      const newIndex = (index + 1) * 100;
      let color;
      if (index < 4) {
        color = lighten(0.1 * (index + 1), value);
      } else {
        color = darken(0.1 * (index - 3), value);
      }
      console.log(color);
      color = shorthandToLonghand(color);

      if (!Object.values(newColors).includes(color)) {
        newColors[`${key}${newIndex}`] = color;
      }
    }
  }

  newColors['transparent'] = 'transparent';

  return newColors;
};

/**
 * returns array of sorted colors by like key name in ascending order
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
