import MainProvider from "../contexts/MainContext";
import GlobalStyle from "../styles/global/globals";

function MyApp({ Component, pageProps }) {

  return (
    <MainProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
