import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: white;
    border: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem;
    ul{
        display: flex;
        gap: 2rem;
    }
`