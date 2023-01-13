import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    height: 10vh;
    max-width: 100vw;
    box-shadow: 0.2rem 0.2rem 0.1rem #E50914;
    justify-content: space-between;
    background-color: #221f1f;
`

export const HeaderLogo = styled.div `
    display:flex;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-items:center;
`

export const ToolBar = styled.section `
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Li = styled.li `
    display: flex;
    text-decoration: none;
    font-size: 3.5vh;
`

export const ToolBarItems = styled.ul `
    display: flex;
    width: 95vw;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`

export const A = styled.a `
    text-decoration: none;
    color: #E50914;
    cursor: pointer;
`

export const ButtonHeader = styled.a `
    text-transform: uppercase;
    border: none;
    font-size: 3.5vh;
    text-align: center;
    background-color: transparent;
    color: #E50914;
    text-decoration: none;
    :hover {
        cursor: pointer;
    }
`