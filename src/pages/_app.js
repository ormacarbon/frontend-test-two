import Header from "../components/Header/Header"
import MenuMobile from "../components/MenuMobile/MenuMobile"
import ThemeProvider from "../contexts/themeContext"
import { GlobalStyles } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {

  return (
    <>
    <ThemeProvider>
      <Header />
      <MenuMobile />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    </>

  )
}

export default MyApp
