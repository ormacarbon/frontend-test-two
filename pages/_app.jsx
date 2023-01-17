import { GlobalStyle } from "../components/global/globalStyles";
import { bitter, kadwa, hyliaSerif } from "../public/fonts/fonts";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { GlobalStorage } from "../storage/global";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div className={[bitter.className, kadwa.className, hyliaSerif.className]}>
      <GlobalStorage>
        <GlobalStyle />
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GlobalStorage>
    </div>
  );
};

export default App;
