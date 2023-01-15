import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Johto Mono', 'sans-serif';
    
  }

  body {
    background: ${({ theme }) => theme.colors.background.beau_blue};
  }
`;