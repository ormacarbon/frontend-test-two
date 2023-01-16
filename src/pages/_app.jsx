import GlobalStyles from '../../src/styles/global';
import { Lexend } from '@next/font/google';
import Layout from '../components/Layout';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '500']
});

function MyApp({ Component, pageProps }) {
	return (
      <main className={lexend.className}>
        <Component {...pageProps} />
        <GlobalStyles />
        <Layout />
      </main>
  )
}

export default MyApp;
