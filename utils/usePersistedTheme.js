import { useState, useEffect } from "react";
import nookies, { setCookie } from 'nookies';

export default function usePersistedTheme(key, initialState) {
    useEffect(() => {
        const [state, setState] = useState(() => {
            const storageValue = nookies.get(key);
    
            if(storageValue) {
                return storageValue;
            } else {
                return initialState;
            }
        });
        // localStorage.setItem(key, JSON.stringify(state));
        setCookie(null, key, state);
        return [state, setState];
    }, [key]);
}