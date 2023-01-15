import { useState, useEffect } from 'react';

export default function useStateFromLocalStorage(key, initialState) {
  const [theme, setTheme] = useState(() => {

    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(key);
      return JSON.parse(storageValue) || initialState;
    }
    
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}