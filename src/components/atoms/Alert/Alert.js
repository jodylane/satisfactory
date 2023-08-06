import { ThemeProvider } from 'styled-components';
import themes from './Alert.theme.js';
import { StyledAlert } from './Alert.styled.js';

const Alert = ({ children, onClick, theme = 'primary', outline }) => {
  const handleClick = (event) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledAlert outline={outline}>
        {/* <Close/> */}
        {children}
      </StyledAlert>
    </ThemeProvider>
  );
};

export default Alert;
