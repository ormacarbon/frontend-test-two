import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  a:visited {
    color: "white";
  }
`;
export const darkTheme = {
    text: '#E1E6F0',
    background: '#0D0E12',
    background2: '#16191d',
    background3: '#202328',
    link: '#1eaaf1',
    linkHover: '#0d8ecf',
    border: '#202328',
    warning: '#fff3cd',
    success: '#d4edda',
    menuBottomLine: '2px solid #202328',
};
export const lightTheme = {
    text: '#000',
    background: '#FFF',
    background2: 'rgba(0,0,0,.06)',
    background3: '#202328',
    link: '#1eaaf1',
    linkHover: '#0d8ecf',
    border: 'rgba(0,0,0,.2)',
    warning: '#fff3cd',
    success: '#d4edda',
    menuBottomLine: '1px solid rgba(0,0,0,.2)',
};
