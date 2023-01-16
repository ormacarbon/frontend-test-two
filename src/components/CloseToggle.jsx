import Link from 'next/link';
import { X } from 'phosphor-react';
import { useContext } from 'react';
import styled from 'styled-components';

const CloseToggleBtnStyles = styled.button`

left: 10px;
background: transparent;
border: none;
color: ${({ theme }) => theme.text};
display: flex;
font-size: 2rem;
margin-left: 1rem;
padding: .25rem;
place-items: center;

cursor: pointer; 
`

export function CloseToggle({ handleAboutToggle }) {
  
function handleClick() {
  console.log('click')
}
  return(
  
    <CloseToggleBtnStyles onClick={handleAboutToggle}>
      <X size={25}/>
    </CloseToggleBtnStyles>
  
  )
}