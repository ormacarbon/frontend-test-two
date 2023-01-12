import MainContainer from "../components/MainContainer";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
      <GlobalStyle />
    </MainContainer>
  );
}

export default MyApp;
