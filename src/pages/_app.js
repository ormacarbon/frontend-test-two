import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contextx/themeContext"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
