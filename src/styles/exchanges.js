import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
`

export const ExchangesBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));   
    gap: 2rem;
    justify-items: center;
    align-content: center;

    @media(max-width:700px){
        grid-template-columns:1fr;   
    }
`