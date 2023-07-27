import themes from '@lib/theme.js';
import { buildSwatches } from '@utils/themeUtils';

import Swatch from './components/Swatch/';
import { Container } from './ListSwatches.styled';

const ListSwatches = () => {
  const swatches = buildSwatches(themes.baseColors, themes.colors);

  return (
    <Container>
      {swatches.map((color, index) => {
        return <Swatch key={index} color={color} />;
      })}
    </Container>
  );
};

export default ListSwatches;
