import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
        font-family: sans-serif;
    }
    body{
        background-color: ${props=>props.theme.background};
    }
    a{
        text-decoration:none;
    }
    li{
        list-style:none
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
` 

export const InputBox = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;

    @media(max-width:1000px){
        width: 400px;
    }
    @media(max-width:450px){
        width: 300px;
    }
`