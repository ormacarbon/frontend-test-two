import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    height: 12vh;
    max-width: 100vw;
    border-bottom: 4px solid #E50914;
    box-shadow: 0.2rem 0.2rem 0.2rem #E50914;
    justify-content: space-evenly;
    background-color: ${props => props.darkMode ? "#221f1f" : 'white'};
    padding-bottom: 0.5rem;
`

export const ToolBar = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const ToolBarItems = styled.ul`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    height: 10vh;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`


export const Li = styled.li`
    display: flex;
    font-size: 1.5rem;
`

export const A = styled.a`
    text-decoration: none;
    color: #E50914;
    cursor: pointer;
    :hover {
        opacity: 0.65;
    }
`

export const Input = styled.input`
background-color: transparent;
border: 2px solid #E50914;
box-shadow: 0.15rem 0.15rem 0.1rem #E50914;
border-radius: 0.5rem;
height: 5vh;
width: 25%;
text-align: center;
color: white;
::placeholder {
    color: ${props => props.darkMode ? "red" : '#E50914'};
    font-size: 1rem;
}
`

export const SwitchButton = styled.button`
    color: ${props => props.darkMode ? "red" : '#E50914'};
    height: 4vh;
    width: 20vw;
    background-color: transparent;
    border: 2px solid #E50914;
    box-shadow: 0.15rem 0.15rem 0.1rem #E50914;
    border-radius: 0.5rem;
    cursor: pointer;
`

export const HeaderLogo = styled.div`
    width: 100%;
    height: 8vh;
    padding: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${props => props.darkMode ? "#221f1f" : "white"};
`