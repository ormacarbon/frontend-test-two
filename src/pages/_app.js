import "../styles/global.css";
import "../styles/fonts";

import CustomThemeProvider from "../contexts/theme";
import RepositoryProvider from "../contexts/repository";

export default function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <RepositoryProvider>
        <Component {...pageProps} />
      </RepositoryProvider>
    </CustomThemeProvider>
  );
}
