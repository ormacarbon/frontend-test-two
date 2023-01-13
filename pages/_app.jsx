import Layout from "../components/Layout"
import { GlobalStyles } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
