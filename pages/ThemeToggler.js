import React, { useState, useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { FaLightbulb } from "react-icons/fa";
const ThemeContext = React.createContext();

const GlobalStyle = createGlobalStyle` 
body { 
  background: ${props => (props.theme.mode === 'light' ? 'white' : 'black')}; 
  color: ${props => (props.theme.mode === 'light' ? 'black' : 'white')}; 
  button {
    cursor: pointer;
  }
  }`

function ThemeToggler() {
const [theme, setTheme] = useState({ mode: 'light' });

function toggleTheme() {
setTheme(prevTheme => ({
...prevTheme,
mode: prevTheme.mode === 'light' ? 'dark' : 'light'
}));
}

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
<ThemeProvider theme={theme}>
<GlobalStyle />
<button onClick={toggleTheme}><FaLightbulb /></button>
<Content />
</ThemeProvider>
</ThemeContext.Provider>
);
}

function Content() {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
<>
  
</>
);
}

export default ThemeToggler;