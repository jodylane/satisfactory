import { buildContrastMap, buildColorMap } from '@utils/themeUtils';

const baseColors = {
  black: '#333333',
  blue: '#2c3e87',
  cyan: '#8fecec',
  green: '#01b367',
  red: '#f81b00',
  white: '#ffffff',
  yellow: '#e6cf01',
};

const colors = buildColorMap(baseColors);

const contrastMap = buildContrastMap(colors);

export default {
  baseColors,
  colors: contrastMap,
};
