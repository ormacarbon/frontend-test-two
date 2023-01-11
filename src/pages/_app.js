import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/theme/defaultTheme';
import { GlobalStyle } from '../styles/global';
import { DarkModeProvider } from '../contexts/DarkMode';
import { Header } from '../components/partials/Header';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
