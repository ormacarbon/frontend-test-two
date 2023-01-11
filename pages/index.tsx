import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Header } from "../src/components/Header"

import light from "../src/styles/themes/light"
import dark from "../src/styles/themes/dark"
import { GlobalStyle } from "../src/styles/global"

export default function Home() {  
  const [theme, setTheme] = useState(dark)
  
  function onChangeTheme(): void {
    setTheme(theme.title === 'light' ? dark : light)
    console.log("theme switched")
  }

  return (
    <ThemeProvider theme={theme}>
      <Header onChangeTheme={onChangeTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
