import GlobalStyle from "../styles/globalStyles"
import { ThemeProvider } from "../context/ThemeContext"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps : { session, ...pageProps}}) {

  return (
    <SessionProvider session={session}>
      <ThemeProvider>  
        <GlobalStyle/>
          <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
