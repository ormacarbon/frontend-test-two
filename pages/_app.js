import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme, GlobalStyles } from '../ThemeConfig';
import styled from 'styled-components';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 5px;
  right: 5px;
  font-size: 1.4rem;
  background-color: white;
  border: none;
  padding: 14px;
  border-radius: 40%;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    z-index: 1;
    top: 10px;
    right: 5px;
    font-size: 1.2rem;
    background-color: white;
    border: none;
    padding: 11px;
    border-radius: 40%;
    width: 40px;
    height: 40px;
  }
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [themeModeIcon, setThemeModeIcon] = useState(false);
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
    setThemeModeIcon((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <Layout>
        <GlobalStyles />
        <Button onClick={toggleTheme}>
          {themeModeIcon ? <MdLightMode /> : <MdDarkMode />}
        </Button>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
