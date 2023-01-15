import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'sans-serif';
    width: fit-content;      
  }

  body {
    background: ${({ theme }) => theme.colors.background.beau_blue};
  }
`;