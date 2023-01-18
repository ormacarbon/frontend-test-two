import { useEffect, useState } from 'react';

export default function useWidth() {
  const [width, setWidth] = useState(0);

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);

    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return width;
}
