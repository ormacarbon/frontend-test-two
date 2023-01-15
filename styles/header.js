import styled from "styled-components";

export const Header = styled.ul`
display: flex;
margin: 2rem auto;
justify-content: center;
font-size: 0.875rem;
align-items: center;
justify-content: space-between ;
z-index: 2;
position: relative;
font-weight: 600;
padding-inline: 2rem;
white-space: nowrap;

@media (max-width: 1279px) {
  justify-content: center ;
  display: flex;
  flex-direction: column;
  }
`

export const HeaderUl = styled.ul`
display: flex;
align-items: center;
flex-direction: row;
@media (max-width: 780px) {
  flex-direction: column-reverse;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  
  @media (max-width: 1279px) {
  margin-bottom: 1rem;
  }
`

export const HeaderLogoText = styled.span`
  margin-left: 1rem;
  letter-spacing: 2px;
  font-size: 1.5rem;
  color: #457b9d;
`

export const HeaderLogo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
  `

export const HeaderSearchInputContainer = styled.div`
    position: relative;
    width: 100%
  `

export const HeaderSearchInput = styled.input`
  background-color: var(--search-color);
  border: none;
  border-radius: 18px;
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  color: var(--font-color);
  width: 70%; 
  margin-left:  1rem;
  margin-top:  0;

  @media (max-width: 780px) {
    margin-top: 0.5rem;
    margin-left: unset;
  }
`

export const SearchIcon = styled.div`
    position: absolute;
    right: 14px;
    top: 8px;
    cursor: pointer;

    @media (max-width: 780px) {
    top: 17px;
    right: 28px;
  }
`

export const ItemHeaderContainer = styled.div`
    display: flex;
    
    @media (max-width: 780px) {
    margin-top: 1rem;
  }
  `
export const ThemeTogglerContainer = styled.div`
  margin-left: 1rem;
  margin-top: 4px;
  cursor: pointer;
  @media (max-width: 780px) {
    margin-left: 0.5rem;
  }
`