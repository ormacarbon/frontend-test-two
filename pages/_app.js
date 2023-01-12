import GlobalStyles from '../styles/globalStyles';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
