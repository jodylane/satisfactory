import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themes from './Alert.theme.js';
import { StyledAlert, Icon } from './Alert.styled.js';

const Alert = ({ children, onClick, theme = 'primary' }) => {
  const [visible, setVisible] = useState('yes');

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    console.log('');
    setVisible('no');
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledAlert>
        {children} {visible}
        <Icon name='Close' onClick={handleClick} />
      </StyledAlert>
    </ThemeProvider>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  /**
   * Determines the visual output of the component.
   */
  theme: PropTypes.oneOf(Object.keys(themes)),
};

export default Alert;
