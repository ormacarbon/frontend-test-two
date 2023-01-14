import { createContext, useEffect, useState } from "react";
import { light } from "../styles/Theme/light";
import { dark } from "../styles/Theme/dark";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({});

export default function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const theme = localStorage.getItem("@theme");
    if (theme) {
      setTheme(JSON.parse(theme));
    }
    console.log(theme);
  }, []);

  function toggleTheme() {
    const _theme = theme.name === "light" ? dark : light;
    setTheme(_theme);
    localStorage.setItem("@theme", JSON.stringify(_theme));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
