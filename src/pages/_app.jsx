import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme/defaultTheme';
import { GlobalStyle } from '../styles/global';

import { DarkModeProvider } from '../contexts/DarkMode';
import { PageActiveProvider } from '../contexts/PageActive';

import { Header } from '../components/partials/Header';
import { BackToTop } from '../components/BackToTop';
import { Footer } from '../components/partials/Footer';

export const getServerSideProps = (context) => {
  console.log(context);
  return {
    props: {
      context
    }
  };
};

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <PageActiveProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Header />
          <BackToTop />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </PageActiveProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
