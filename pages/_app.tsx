import { AppProps } from 'next/app';
import ThemeContextComponent from '../contexts/Theme';
import PageContainer from '../components/PageContainer';
import Navbar from '../components/Navbar';
import './../global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeContextComponent>
      <PageContainer>
        <Navbar/>
        <Component {...pageProps} />
      </PageContainer>
    </ThemeContextComponent>
  );
}

export default App;