import { createContext, useEffect, useState } from "react";

export const themeContext = createContext(false);

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setDarkTheme(JSON.parse(localStorage.getItem("theme")));
    }
  }, []);

  return (
    <themeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </themeContext.Provider>
  );
}
