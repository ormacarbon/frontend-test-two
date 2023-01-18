import { createContext, useEffect, useState } from "react";
import { darkTheme, ligthTheme } from "../styles/theme";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState("ligth")
    const [theme, setTheme] = useState({})


    useEffect(() => {
        mode === "ligth" ? setTheme(ligthTheme) : setTheme(darkTheme)
    }, [mode])

    const onChangeTheme = () => {
        theme === "ligth" ? setTheme("dark") : setTheme("ligth")
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, onChangeTheme, mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}