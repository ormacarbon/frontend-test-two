import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  background-color: #FFF;
  height: 100px;
  display: flex;
  align-items: center;
`

export const HeaderNavigation = styled.nav`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  `
export const ListItems = styled.ul`
  width: 800px;
  display: flex;
  justify-content: space-around;

  a{
    color: #000000ae;
    font-size: 1rem;
    font-weight: 600;
    transition: all .3s;
    &:hover {
      color: #551A8B;
    }
  }
`
export const ChangeTheme = styled.div`
  max-width: 200px;
  font-size: 1.5rem;
  margin-right: 100px;
`