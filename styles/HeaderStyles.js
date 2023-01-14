import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    height: 10vh;
    max-width: 100vw;
    box-shadow: 0.2rem 0.2rem 0.1rem #E50914;
    justify-content: space-between;
    background-color: #221f1f;
    margin-bottom: 0.5rem;
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
    :hover {
        color: white
    }
`

export const Input = styled.input `
background-color: transparent;
border: 2px solid #E50914;
box-shadow: 0.15rem 0.15rem 0.1rem #E50914;
border-radius: 0.5rem;
height: 6vh;
width: 40vh;
text-align: center;
color: white;
::placeholder {
    color: white;
    font-size: 1rem;
}
`