import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="page-content">{children}</div>

      <footer>
        <p>test</p>
      </footer>
    </>
  );
};

export default Layout;
