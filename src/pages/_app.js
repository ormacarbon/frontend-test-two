import PropTypes from 'prop-types';
import Head from 'next/head';
import ThemeProvider from '../contexts/ThemeContext';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Text</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
