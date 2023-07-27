import { ColorSwatch } from './Swatch.styled';

const Swatch = ({ color }) => (
  <ColorSwatch backgroundColor={color.value} color={color.contrastColor}>
    <div>
      <p>{color.key}</p>
      <p>{color.value}</p>
    </div>
  </ColorSwatch>
);

export default Swatch;
