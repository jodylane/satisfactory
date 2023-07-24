import { ThemeProvider } from 'styled-components';
import themes from './Button.theme.js';
import { StyledButton } from './Button.styled';

const Button = ({ children, className, onClick, disabled, theme = 'primary' }) => {
  const handleClick = (event) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledButton className={className} onClick={handleClick} disabled={disabled}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
