import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header/index";
import Wrapper from "../components/Wrapper";
import SnackbarProvider from "react-simple-snackbar";
import { useRouter } from "next/router";
 
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { route } = router;
  const routeName = route.replace(/[^a-zA-Z ]/g, "");
  const routeNameCapitalized = "| " + routeName.charAt(0).toUpperCase() + routeName.slice(1);

  return (
    <>
      <Head>
        <title>Rick and Morty Data {route !== "/" ? routeNameCapitalized : ""}</title>
      </Head>
      <SnackbarProvider>
        <Wrapper>
          <Header />
          <Component {...pageProps} />
        </Wrapper>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
