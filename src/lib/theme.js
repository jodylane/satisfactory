import { buildContrastMap } from '@utils/themeUtils';

const baseColors = {
  black: '#333333',
  blue: '#2c3e87',
  cyan: '#8fecec',
  green: '#01b367',
  red: '#f81b00',
  white: '#ffffff',
  yellow: '#e6cf01',
};

const colors = {
  blackLight: '#666',
  black: '#333333',
  blackDark: '#000',
  blueLight: '#5269c7',
  blue: '#2c3e87',
  blueDark: '#131b3a',
  cyanLight: '#e6fbfb',
  cyan: '#8fecec',
  cyanDark: '#38dddd',
  greenLight: '#1cfe9d',
  green: '#01b367',
  greenDark: '#004e2d',
  redLight: '#ff705f',
  red: '#f81b00',
  redDark: '#921000',
  white: '#ffffff',
  whiteDark: '#ccc',
  yellowLight: '#feed4f',
  yellow: '#e6cf01',
  yellowDark: '#807401',
};

const contrastMap = buildContrastMap(colors);

export default {
  baseColors,
  colors: contrastMap,
};
