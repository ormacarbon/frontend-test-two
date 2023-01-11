import { globalContext } from "./globalContext"

export const GlobalProvider = ({ children }) => {
  return (
    <globalContext.Provider value={{}}>
      {children}
    </globalContext.Provider>
  )
}
