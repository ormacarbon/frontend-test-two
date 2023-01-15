import GlobalStyle from "../styles/globalStyles"
import { ThemeProvider } from "../context/ThemeContext"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>  
      <GlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
