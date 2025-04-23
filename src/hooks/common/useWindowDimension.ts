import {useCallback, useState} from 'react';
import useEventListener from './useEventListener';

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
  }
  return {
    width: 0,
    height: 0
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });

  const handleResize = useCallback(
    () => setWindowDimensions(getWindowDimensions()),
    []
  );
  useEventListener('resize', handleResize);

  return windowDimensions;
};
