import { useState, useEffect, useRef } from 'react';
import { atom, useAtom } from 'jotai';
import { useLocation } from 'react-router-dom';
interface ComponentSize {
  width: number;
  height: number;
}
export const componentSizeAtom = atom<ComponentSize>({ width: 0, height: 0 });
function useComponentSize(): [React.RefObject<HTMLDivElement>, ComponentSize] {
  const [size, setSize] = useAtom(componentSizeAtom);
  const componentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      const { width, height } =
        componentRef.current?.getBoundingClientRect() ?? {
          width: 0,
          height: 0,
        };
      setSize({ width, height });
      console.log('resize', width, height);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  return [componentRef, size];
}

export default useComponentSize;
