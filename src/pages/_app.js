import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/theme/defaultTheme';
import { GlobalStyle } from '../styles/global';
import { DarkModeProvider } from '../contexts/DarkMode';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
