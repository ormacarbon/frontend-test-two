import { useState, useEffect } from 'react';

function usePersistedState(key, initialState) {
  const [storageValue, setStorageValue] = useState();

  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      setStorageValue(window.localStorage.getItem(key));
    }

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
