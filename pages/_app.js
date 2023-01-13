import { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../shared/styles/ThemeConfig"
import Navbar from "../components/Navbar"
function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light")
      })

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => { })
    }
  }, [])

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleThemeCallback = {toggleTheme}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
