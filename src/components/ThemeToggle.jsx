import { Sun } from 'phosphor-react';
import styled from 'styled-components';

const StyledThemeToggle = styled(Sun)`
  position: fixed;
  top: 1.5%;
  right: 5%;
  background: "transparent";
  border-radius: 4px;
  color: ${({ theme }) => theme.themeBtnText};
  display: flex;
  font-size: 2rem;
  padding: .5rem;
  place-items: center;
  z-index: 999;

  cursor: pointer;

  :hover {
    background: var(--gray-300);
    transition: 100ms ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    top: 3%;
}

`

export function ThemeToggle({handleThemeToggle}) {
  return(
    <StyledThemeToggle alt="Switch Dark/Light Mode" size={32} onClick={handleThemeToggle}/>
  )
}