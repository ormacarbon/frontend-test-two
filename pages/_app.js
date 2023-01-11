//? Layout Component
import Layout from "../components/Layout/Layout";
//? GLobal Style
import GlobalStyle from "../styles/globalStyle";
//? CONTEXT
import GlobalContext from "../context/UserContext";
//? REACT
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [name, setName] = useState("")

  return (
    <GlobalContext.Provider value={{name, setName}}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
