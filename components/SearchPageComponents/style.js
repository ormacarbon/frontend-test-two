import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;

    ${(props) => props.header && css`
        justify-self: flex-start;
    `}
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
    text-align: center;
`

export const SearchPageTitle = styled.h2`
    font-family: 'Press Start 2P';
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textPrimary};
    text-shadow: 5px 5px ${(props) => props.theme.colors.danger};

    @media only screen and (min-width: 764px){
        font-size: 2rem;
    }
`

export const SearchPageSub = styled.p`
    font-size: 1rem;
    margin: 20px 0;
    color: ${(props) => props.theme.colors.textPrimary}
`

export const SearchTip = styled.p`
    font-size: .8rem;
    margin: 20px 0;
    color: ${(props) => props.theme.colors.textPrimary}
`

export const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
    display: none;
    margin: 10px 0 0 0 ;
    ${(props) => !(props.isValid )&& css`
        display: block;
    `}
`