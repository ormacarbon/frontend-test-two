import { useEffect, useMemo, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState('light')
  
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        setTheme(storedTheme)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('theme', theme)
    }, [theme])
  
    const switchTheme = newTheme => setTheme(newTheme)
  
    return useMemo(() => ({ theme, switchTheme }), [theme, switchTheme])
}