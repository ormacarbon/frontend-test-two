//? Layout Component
import Layout from "../components/Layout/Layout";
//? GLobal Style
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Layout>
      

      

  );
}

export default MyApp;
