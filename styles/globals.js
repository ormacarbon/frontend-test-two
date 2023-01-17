import { createContext } from "react";

export const themes = {
  dark: "dark-mode",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
