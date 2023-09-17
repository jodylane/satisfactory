import { useState, useEffect, useRef } from 'react';

function usePopover(initiallyVisible) {
  const [visible, setVisible] = useState(initiallyVisible);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return { handleToggle, args: { theme: 'light-border', trigger: 'manual', visible } };
}

export default usePopover;
