import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --white: #ffffff;
    --gray-100: #F2F2F2;
    --gray-200: #C9C9C9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #141414;
    --gray-800: #0D0D0D;
    --alpha-20: rgba(0, 0, 0, 0.2)
    --alpha-30: rgba(0, 0, 0, 0.3)
    --purple: #8284FA;
    --purpledark: #5E60CE;
    --cyanblue: #5CB8E4;
    --cyan: #4ef0f0;
    --blueflickr: #0063DC
    --pinkflickr: #ff0084
    --redlight: #FF847C;
    --red: #E84A5F;
    --reddark: #BD4B4B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  body, input, textarea, button {
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    
  }

  h1, h2 {
    font-family: 'BigNoodleTitling', sans-serif;
    font-style: oblique;
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.text};
    font-family: 'BigNoodleTitling', sans-serif;
    font-size: 1.35rem;
    font-style: oblique;
    margin: 1.5rem;
    text-decoration:none;
  }

  a:hover {
    color: var(--reddark);
    transition: 200ms ease; 
  }

  .author-section {
    color: #F2F2F2;
  }

  .recent-section {
    background-color: ${({ theme }) => theme.body};
  }

  .wrapper {
    max-width: 70rem;
    margin: auto;
    padding: 0 1rem
  }

`

export const lightTheme = {
  aboutBg: '#F2F2F2',
  body: '#F2F2F2',
  boxShadow: '2px 2px 12px #808080',
  line: '#C9C9C9',
  link: '#262626',
  navbar: 'rgba(255,255,255,0.6)',
  navbarScroll: '#E9E9E9',
  selected: '#333333',
  text: '#141414',
  themeBtnText: '#262626',
}

export const darkTheme = {
  aboutBg: '#1A1A1A',
  body: '#141414',
  boxShadow: 'none',
  line: '#262626',
  link: '#C9C9C9',
  navbar: 'rgba(0, 0, 0, 0.2)',
  navbarScroll: '#262626',
  selected: '#BD4B4B',
  text: '#F2F2F2',
  themeBtnText: '#C9C9C9',
}