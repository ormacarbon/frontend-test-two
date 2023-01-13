import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 50px;
    background-color: ${(props) => props.theme.colors.darker};
    width: 100vw;
    align-self: flex-end;
`

export const Brand = styled.h2`
    font-family: 'Press Start 2P';
    font-size: 1.5rem;
    text-shadow: 5px 5px ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.letters};
`


export const Line = styled.div`
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.background};
    margin: 10px 0;
    filter: opacity(0.3);
`