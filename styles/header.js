import styled from "styled-components";

export const Header = styled.ul`
    display: flex;
    margin: 2rem auto;
    justify-content: center;
    height: 2rem;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    position: relative;
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
  color: #fff;
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
    color: #fff;


    &:hover {
      color: #e9ecef;
    }
  `

export const HeaderSearchInput = styled.input`
    background-color: hsla(0, 0%, 100%, .25);
    border: none;
    border-radius: 18px;
    padding: 8px;
    color: white;
    padding-right: 40px;
    width: 140px; 
`
export const SearchIcon = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
`