import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;
    padding: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 100%;
`

export const SearchPageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`

export const SearchPageTitle = styled.h2`
    font-family: 'Press Start 2P';
    font-size: 2rem;
    color: ${(props) => props.theme.colors.textPrimary};
    text-shadow: 5px 5px ${(props) => props.theme.colors.danger};
`

export const SearchPageSub = styled.p`
    font-size: 1rem;
    margin: 20px 0;
`

export const SearchTip = styled.p`
    font-size: .8rem;
    margin: 20px 0;
`