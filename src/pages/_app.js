import "../styles/global.css";
import "../styles/fonts";

import CustomThemeProvider from "../contexts/theme";
import RepoHistoryProvider from "../contexts/StorageRepositories/history";

import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <RepoHistoryProvider>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </RepoHistoryProvider>
    </CustomThemeProvider>
  );
}
