import Header from "../components/Header/index";
import { GlobalStyle, Main } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
