import { darkTheme, lightTheme } from "@/styles/themes";
import { createContext, ReactNode, useState } from "react";
import { ThemeContext } from "styled-components";

interface ThemeSwitchContextProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}
export const ThemeSwitchContext = createContext({} as ThemeSwitchContextProps);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setActiveTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => setActiveTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeSwitchContext.Provider value={{ theme, toggleTheme }}>
      <ThemeContext.Provider value={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  );
};
