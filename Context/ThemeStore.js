import React, { useState,createContext } from "react";

const ThemeContext = createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };