import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { useProgress } from '@lib/hooks/useProgress.js';

import themes from './themes';
import { StyledAlert, Icon, ProgressBar } from './Alert.styled.js';

const Alert = ({ children, onClick, theme = 'primary', duration = 5, expire = true }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    setVisible(false);
  };

  const { percent, countDownActive, handleMouseEnter, handleMouseLeave } = useProgress(
    duration,
    expire,
    handleClick
  );

  return (
    <ThemeProvider theme={themes[theme]}>
      {visible && (
        <StyledAlert onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {children} {visible}
          <Icon name='Close' category='Interface' onClick={handleClick} />
          {countDownActive && <ProgressBar percent={percent} />}
        </StyledAlert>
      )}
    </ThemeProvider>
  );
};

Alert.propTypes = {
  /**
   * Whatever UI you want to be associated with the alert
   */
  children: PropTypes.node,
  /**
   * Determines the visual output of the component.
   */
  onClick: PropTypes.func,
  /**
   * Determines the visual output of the component.
   */
  theme: PropTypes.oneOf(Object.keys(themes)),
};

export default Alert;
