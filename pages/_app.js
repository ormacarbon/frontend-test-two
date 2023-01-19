import GlobalStyle from "../styles/globalStyled"

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
  )
}

export default MyApp
