import React, { createContext, useEffect, useState } from 'react';
import { settings, darkTheme, lightTheme } from '../styles/theme';

export const ThemeContext = createContext(
  {
    theme:{...darkTheme, ...settings},
    setTheme: () => {},
    darkMode: true,
    setDarkMode: () => {}
  }
)

export default function ThemeContextProvider({ children, dark }) {
  const [ darkMode, setDarkMode ] = useState(dark);
  const [ theme, setTheme ] = useState(darkMode ? {...darkTheme, ...settings} : {...lightTheme, ...settings});

  useEffect(()=>{
    setTheme(darkMode ? {...darkTheme, ...settings} : {...lightTheme, ...settings})
  },[darkMode])

  return (
    <ThemeContext.Provider value={{theme:theme, darkMode:darkMode, setDarkMode:setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}