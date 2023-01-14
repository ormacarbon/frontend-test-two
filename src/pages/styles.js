import styled from "styled-components";

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