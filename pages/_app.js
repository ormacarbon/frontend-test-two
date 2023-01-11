import GlobalStyles from "../globalStyles";
import GlobalProvider from "../contexts/state";

export default function MyApp({ Component, pageProps }) {

  return (
    <GlobalProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
