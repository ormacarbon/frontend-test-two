import { useState, useEffect } from "react";

export default function usePersistedTheme(key, initialState) {
    useEffect(() => {
        const [state, setState] = useState(() => {
            const storageValue = localStorage.getItem(key);
    
            if(storageValue) {
                return JSON.parse(storageValue);
            } else {
                return initialState;
            }
        });
        localStorage.setItem(key, JSON.stringify(state));

        return [state, setState];
    }, [key]);
}