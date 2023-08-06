import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import themes from './Button.theme.js';
import { StyledButton } from './Button.styled';

const Button = ({ children, id, onClick, disabled, theme = 'primary', outline, fullWidth }) => {
  const handleClick = (event) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledButton
        id={id}
        onClick={handleClick}
        disabled={disabled}
        outline={outline}
        fullWidth={fullWidth}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes)),
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Button;
