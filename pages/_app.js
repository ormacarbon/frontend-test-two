import { Marvel } from "@next/font/google"
import Head from "next/head"
import GlobalStyle from "../styles/global"

const marvel = Marvel({ weight: ["400", "700"], subsets: ["latin"] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marvel API</title>
      </Head>
      <main className={marvel.className}>
        <Component {...pageProps} />
      </main>
      <GlobalStyle />
    </>
  )
}

export default MyApp
