import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Popover.styled';

const Popover = ({ children, onClick, position = 'bottom', visible, setVisible, target }) => {
  const ref = useRef(null);

  const handleClick = () => {
    if (onClick) {
      onClick(visible);
      setVisible(!visible);
    }
  };

  return (
    visible && (
      <Container
        ref={ref}
        self={ref.current}
        target={target}
        onClick={handleClick}
        position={position}
      >
        {children}
      </Container>
    )
  );
};

Popover.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onClick: PropTypes.func,
  children: PropTypes.node,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default Popover;
