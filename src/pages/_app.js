import { GlobalProvider } from "../context/globalProvider"
import GlobalStyle from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
