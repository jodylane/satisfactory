import { ThemeProvider } from 'styled-components';
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

export default Button;
