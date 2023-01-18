import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
        transition: background 0.2 linear;
        background-color: ${(props) => props.theme.bg};
    }

    html{
        
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 1080px) {
            font-size: 87.5%;
        }
    }
`;