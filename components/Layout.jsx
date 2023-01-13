import { NavBar } from "./NavBar/NavBar";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

function Layout(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavBar setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      {props.children}
    </ThemeProvider>
  );
}

export default Layout;