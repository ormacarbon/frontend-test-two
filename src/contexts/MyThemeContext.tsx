import { createContext } from "react";

export const MyThemeContext = createContext({} as null)

export function MyThemeContextProvider({ children }) {
  return (
    <MyThemeContext.Provider value={null}>
      {children}
    </MyThemeContext.Provider>
  )
}