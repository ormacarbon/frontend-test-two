import Header from "../components/Header"
import { GlobalStyles } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
