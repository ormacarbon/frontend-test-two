import React from "react";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
