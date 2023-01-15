import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 50px;
    width: 100%;
    height: 40vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`

export const SearchTitleContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

export const SearchTitle = styled.h3`
    font-family: 'Press Start 2P';
    font-size: 1.5rem;
    text-shadow: 5px 5px ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textPrimary};
`

export const HorizontalLine = styled.div`
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.darker};
    margin: 20px 0;
    filter: opacity(.2);
`

