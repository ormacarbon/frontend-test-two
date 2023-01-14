import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      if (storageValue !== null) {
        return JSON.parse(storageValue);
      }
    } catch (e) {
      console.error(e);
    }
    return initialState;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
