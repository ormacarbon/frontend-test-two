import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Context } from "../../utility/context";

const Layout = ({ children }) => {
  const [context, setContext] = useState();
  return (
    <>
      <Header />
      <Context.Provider value={{ context, setContext }}>
        {children}
      </Context.Provider>
      <Footer />
    </>
  );
};

export default Layout;
