import { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/global-styles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles isDarkTheme={isDarkTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
