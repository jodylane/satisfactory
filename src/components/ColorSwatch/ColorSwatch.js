import themes from '@lib/theme.js';
import { buildSwatches } from '@utils/themeUtils';
import { Container, Swatch } from './ColorSwatch.styled';

const ColorSwatch = () => {
  const swatches = buildSwatches(themes.baseColors, themes.colors);
  console.log(themes.colors);

  return (
    <Container>
      {swatches.map((color, index) => {
        return (
          <Swatch key={index} backgroundColor={color.value} color={color.contrastColor}>
            <div>
              <p>{color.key}</p>
              <p>{color.value}</p>
            </div>
          </Swatch>
        );
      })}
    </Container>
  );
};

export default ColorSwatch;
