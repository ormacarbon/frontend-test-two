import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Rubik", sans-serif;
        background: ${props => props.theme.secondary};
    }

`;


export default GlobalStyle;