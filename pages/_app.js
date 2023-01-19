import { ThemeProvider } from 'styled-components';
import { MainContainer } from '../components/MainContainer';
import GlobalStyle from '../styles/global';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import usePersistedState from '../utils/usePersistedState';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer toggleTheme={toggleTheme} theme={theme}>
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;
