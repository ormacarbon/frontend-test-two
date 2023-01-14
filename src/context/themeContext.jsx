import { createContext, useEffect, useState } from "react";

export const themeContext = createContext(false);

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme" != null)) {
      setDarkTheme(localStorage.getItem("theme"));
    }
  }, [darkTheme]);

  return (
    <themeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </themeContext.Provider>
  );
}
