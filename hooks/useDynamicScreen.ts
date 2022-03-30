import React, { useState, useEffect} from 'react';

interface IwindowSize {
    width: any,
    height: any
}

export const useDynamicScreen = () => {
    const [windowSize, setWindowSize] = useState<IwindowSize>({
        width: undefined,
        height: undefined,
      });

      const handleResize = () => {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight
          })
      }
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener("resize", handleResize);
          handleResize();       
          return () => window.removeEventListener("resize", handleResize);
        }
      }, []); 

      return {
          windowHeight: windowSize.height,
          windowWidth: windowSize.width
      }
}