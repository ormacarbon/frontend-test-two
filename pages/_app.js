import Layout from "../components/layout";
import styled from "styled-components";



function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
