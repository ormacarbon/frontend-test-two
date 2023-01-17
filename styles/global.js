import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        src: local(Roboto), url(../public/fonts/Roboto/Roboto-Regular.ttf) format(truetype);
        font-weight: normal;
    }
   
    * {
        margin: 0;
        padding: 0;
        font-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.mode == 'light' ? props.theme.colors.black : props.theme.colors.white};
    }
    
    h1, h2, h3, h4, p {
        font-family: "Roboto", sans-serif;
    }

    input {
        padding-left: 10px;
        border: none;
    }
    
    button {
        background-color: rgba(108, 108, 255, 1);
        color: white;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #888; 
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;  