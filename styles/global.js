import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans';
    }
    body{
        background-color: ${(props) => props.theme.colors.background};
    }
`;
