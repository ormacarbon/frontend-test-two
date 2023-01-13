import React, { createContext } from "react";
import { useTheme } from "./useThemeHook";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  
const {theme,switchTheme} = useTheme()

  return (
    <ThemeContext.Provider value={{ theme,switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };