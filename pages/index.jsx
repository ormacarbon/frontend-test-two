import NavBar from '../components/navBar';
import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/theme"

export default function Home() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  function toggleTheme(e) {
    const container = document.getElementById('container');
    if (e.target.checked) {
      container.classList.add("dark");
    } else {
      container.classList.remove("dark");
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <button onClick={themeToggler}>Switch Theme</button>
        <NavBar />
      </>
    </ThemeProvider>
  );
}