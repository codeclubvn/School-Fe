import { useEffect, useState } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

const useWindowSize = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };
    //first load
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowSize;
