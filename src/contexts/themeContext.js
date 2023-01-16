import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const darkTheme = {
  background: "black",
  text: "white",
};
export const lightTheme = {
  background: "white",
  text: "black",
};

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  if (theme === "dark") {
    setTheme(darkTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
