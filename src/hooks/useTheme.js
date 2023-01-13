import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") !== "dark"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const themeFromStorage = localStorage.getItem("theme");
      if (themeFromStorage) {
        setTheme(themeFromStorage);
        document.documentElement.classList.add(themeFromStorage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return [theme, setTheme];
}
