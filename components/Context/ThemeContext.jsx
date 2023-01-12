import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext();

export function Theme({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Theme
