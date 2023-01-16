import Link from 'next/link';
import { X } from 'phosphor-react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 59vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
  background-color: var(--gray-700);
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--reddark);
    font-style: normal;
    margin-bottom: 1rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--gray-100);
  text-decoration: none;
  font-size: 1.25rem;
  transition: 250ms all ease-in-out;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

`

const CloseToggle = styled(X)`
  position: fixed;
  top: 3%;
  left: 5%;

  background: var(--gray-500);
  border-radius: 4px;
  color: #fff;
  display: flex;
  font-size: 2rem;
  padding: .5rem;
  place-items: center;
  
  cursor: pointer; 
`

export function Menu({handleNavToggle, handleAboutToggle}) {
  return (<div>
    <StyledMenu>
        <h1>Andrek Titanium</h1>
        <StyledLink href="/" onClick={handleNavToggle}>Home</StyledLink>
        <StyledLink href="/" onClick={handleAboutToggle}>About</StyledLink>
        <StyledLink href="#recent" onClick={handleNavToggle}>Recent</StyledLink>
        <StyledLink href="#favorites" onClick={handleNavToggle}>Favorites</StyledLink>
        <StyledLink href="#contact" onClick={handleNavToggle}>Contact</StyledLink>
        <CloseToggle 
          size={32} 
          onClick={handleNavToggle}
        />
    </StyledMenu>
    </div>
  )
}

