import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${ props => props.theme.secondary};
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
`


export const Content = styled.div`
    width: 80%;
    display: flex;
    gap: 2rem;
`