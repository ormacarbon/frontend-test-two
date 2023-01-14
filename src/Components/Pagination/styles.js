import styled from "styled-components";

export const PaginationContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 1.5rem 2rem;

    @media(max-width:1000px){
        max-width: 600px;
    }
    @media(max-width:650px){
        max-width: 400px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    color: ${props=>props.theme.primary};

    @media(max-width:450px){
        font-size: 1.3rem;
    }
`