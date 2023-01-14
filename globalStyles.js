import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body{
    background-color: ${props => props.theme.body};
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;