import styled from "styled-components";

export const PaginationContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 1.5rem 2rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    color: ${props=>props.theme.primary};
`