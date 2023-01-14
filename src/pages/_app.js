import Header from "../components/Header/Header"
import ThemeProvider from "../contexts/themeContext"
import { GlobalStyles } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {

  return (
    <>
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    </>

  )
}

export default MyApp
