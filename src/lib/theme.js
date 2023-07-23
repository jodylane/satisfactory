import { lighten, darken, getContrast } from 'polished';
import { capitalizeFirstLetter } from '@utils/stringUtils';

const originalColors = {
  black: '#090e1b',
  blue: '#2c3e87',
  cyan: '#8fecec',
  green: '#01b367',
  red: '#f81b00',
  white: '#ffffff',
  yellow: '#e6cf01',
};

const baseColors = {
  lightBlack: '#233668',
  black: '#090e1b',
  darkBlack: '#000000',
  lightBlue: '#5269c7',
  blue: '#2c3e87',
  darkBlue: '#131b3a',
  lightCyan: '#e6fbfb',
  cyan: '#8fecec',
  darkCyan: '#38dddd',
  lightGreen: '#1cfe9d',
  green: '#01b367',
  darkGreen: '#004e2d',
  lightRed: '#ff705f',
  red: '#f81b00',
  darkRed: '#921000',
  white: '#ffffff',
  lightYellow: '#feed4f',
  yellow: '#e6cf01',
  darkYellow: '#807401',
};

const contrastMap = Object.entries(baseColors).map(([key, value]) => {
  return {
    key,
    value,
    contrast: { dark: getContrast(value, '#000000'), light: getContrast(value, '#ffffff') },
  };
});

export default {
  colors: {
    ...baseColors,
  },
  contrastMap,
  button: {
    primary: {
      color: baseColors.white,
      backgroundColor: baseColors.blue,
    },
    secondary: {
      color: '#ffffff',
      backgroundColor: '#0000FF',
    },
    warning: {
      color: '#ffffff',
      backgroundColor: '#0000FF',
    },
    info: {
      color: '#ffffff',
      backgroundColor: '#0000FF',
    },
    success: {
      color: '#ffffff',
      backgroundColor: '#0000FF',
    },
  },
};
