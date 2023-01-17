import Footer from './Footer';
import Navbar from './Navbar';

import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Head>
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <title>Jikan Lib</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
