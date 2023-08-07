import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { secondsToMiliSeconds } from '@utils/timeUtils.js';

export const useProgress = (duration, expire = true, handleExpire = () => {}) => {
  const [percent, setPercent] = useState(100);
  const [countDownActive, setCountDownActive] = useState(expire);

  const handleMouseEnter = debounce(() => {
    if (expire) {
      setCountDownActive(false);
      setPercent(100);
    }
  }, 300);

  const handleMouseLeave = debounce(() => {
    if (!countDownActive && expire) {
      setCountDownActive(true);
    }
  }, 300);

  useEffect(() => {
    if (expire) {
      let intervalId = null;

      if (countDownActive && !intervalId) {
        intervalId = setInterval(() => {
          setPercent((prevPercent) => {
            if (prevPercent > 0) {
              return prevPercent - 1;
            } else {
              clearInterval(intervalId);
              setCountDownActive(false);
              handleExpire();
              return 0;
            }
          });
        }, secondsToMiliSeconds(duration) / 100);
      } else if (!countDownActive) {
        clearInterval(intervalId);
      }

      return () => {
        clearInterval(intervalId);
        handleMouseEnter.cancel();
        handleMouseLeave.cancel();
      };
    }
  }, [duration, countDownActive]);

  return { percent, countDownActive, handleMouseEnter, handleMouseLeave };
};
