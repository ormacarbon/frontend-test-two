import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    max-width:800px;
    padding: 1rem;
    margin: 2rem 0 2rem 0;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${props=>props.theme.primaryBack};
    color: ${props=>props.theme.text};
    
    @media(max-width:1000px){
        max-width: 400px;
    }
    @media(max-width:425px){
        max-width: 300px;
    }
`