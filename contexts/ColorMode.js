import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {alert("me configure primeiro")},
  toggleMode: () => {alert("me configure primeiro")}
})

export default function ColorModeProvider({ children, inicialMode }) {
  const [mode, setMode] = useState(inicialMode)

  function toggleMode() {
    if (mode === "dark") setMode("light")
    if (mode === "light") setMode("dark")
  }

  return (
    <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
      {children}
    </ColorModeContext.Provider>
  );
}
