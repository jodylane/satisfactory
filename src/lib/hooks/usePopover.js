import { useState, useEffect, useRef } from 'react';

function usePopover(initialState) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialState);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (ref.current) {
      setTarget(ref.current);
    }
  }, []);

  const togglePopover = () => {
    setVisible(!visible);
  };

  return {
    visible,
    togglePopover,
    ref,
    target: target,
  };
}

export default usePopover;
