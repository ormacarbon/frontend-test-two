import styled from "styled-components";

export const Input = styled.input`
    width: 800px;
    padding: 1rem;
    margin: 2rem 0 2rem 0;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${props=>props.theme.primaryBack};
    color: ${props=>props.theme.text};
`