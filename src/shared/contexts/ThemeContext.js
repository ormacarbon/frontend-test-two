import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { dark, light } from "../styles/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return undefined;

    const theme = localStorage.getItem("theme");

    if (theme) return theme;

    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    if (theme === "light") return setTheme("dark");

    return setTheme("light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={theme === "light" ? light : dark}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
