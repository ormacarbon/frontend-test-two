import { List } from 'phosphor-react';
import styled from 'styled-components';

const StyledMenuToggle = styled(List)`
  position: fixed;
  top: 3%;
  left: 5%;
  
  background: var(--gray-500);
  border-radius: 4px;
  color: var(--gray-100);
  display: none;
  font-size: 2rem;
  padding: .5rem;
  place-items: center;

  cursor: pointer;

  @media only screen and (max-width: 768px) {
  display: flex;
}

`

export function MenuToggle({handleNavToggle}) {
  return(
    <StyledMenuToggle size={32} onClick={handleNavToggle}/>
  )
}