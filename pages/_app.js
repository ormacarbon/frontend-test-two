//? Layout Component
import Layout from "../components/Layout/Layout";
//? GLobal Style
import GlobalStyle from "../styles/globalStyle";
//? React Query
import { QueryClientProvider } from "react-query";
import { queryClient } from "../utils/queryClient";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
