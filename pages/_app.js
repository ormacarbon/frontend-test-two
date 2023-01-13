import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { GlobalStyle, Main } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
