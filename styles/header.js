import styled from "styled-components";

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
  align-items: center;
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

export const HeaderSearchInputContainer = styled.div`
    position: relative;
  `

export const HeaderSearchInput = styled.input`
    background-color: hsla(0, 0%, 100%, .25);
    border: none;
    border-radius: 18px;
    padding: 0.375rem 2rem 0.375rem 0.75rem;
    color: white;
    width: 130px; 
    margin-left: 1rem;
`
export const SearchIcon = styled.div`
    position: absolute;
    right: 14px;
    top: 8px;
    cursor: pointer;
`