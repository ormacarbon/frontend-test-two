import { createContext, useEffect, useState } from "react";
import Theme from "../theme/Theme";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export function ThemeProvider({ children }){
    const [theme, setTheme] = useState('light')
    const [mounted, setMounted] = useState(false)

    function addToLocalStorage(theme){
        localStorage.setItem('@theme', theme)
    }

    function getSavedTheme(){
        return localStorage.getItem('@theme')
    }

    function initTheme(){
        const savedTheme = getSavedTheme()
        if(savedTheme){
            setTheme(savedTheme)
            return
        }

        addToLocalStorage('light')
    }

    function toggleTheme(){
        if(theme == "light"){
            setTheme('dark')
            addToLocalStorage('dark')
        }else{
            setTheme('light')
            addToLocalStorage('light')
        }
    }

    useEffect(() => {
        initTheme()
        setMounted(true)
    }, [])


    if (!mounted) return null
    

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Theme theme={theme}>
                {children}
            </Theme>
        </ThemeContext.Provider>
    )
}