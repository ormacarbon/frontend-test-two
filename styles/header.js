import styled from "styled-components";

export const Header = styled.ul`
    display: flex;
    margin: 48px auto;
    justify-content: center;
    height: 64px;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
  `

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`

export const HeaderLogoText = styled.span`
  margin-left: 1rem;
  letter-spacing: 2px;
  font-size: 1.5rem;
`

export const HeaderLogo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
  `

export const HeaderUl = styled.ul`
  display: flex;
  `

export const HeaderLi = styled.li`
    padding-inline: 12px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      color: #fefae0;
    }
  `

export const HeaderSearchInput = styled.input`
    
`