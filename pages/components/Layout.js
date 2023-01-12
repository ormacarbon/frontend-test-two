import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({children}) {
   return (
      <>
      <Head>
         <link rel='shortcut icon' href='/images/favicon.ico'/>
         <title>Pokémom</title>
         <meta property="og:title" content="My page title" key="title" />
      </Head>
         <Navbar/>
         <main>{children}</main>
         <Footer/>
      </>
      )
}