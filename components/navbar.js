import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const DivInitial = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 5px;
  height: 80px;
  background-color: black;
  @media (max-width: 576px) {
    
  }
`

const Lists = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0 5px;
  color: white;
  font-size: 25px;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }

`

const Colum = styled.ul`
  display: flex;
  padding: 0 20px;
  align-items: center;
  
  @media (min-width: 768px) {   
}
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const StyledIcon = styled(DarkModeOutlinedIcon)`
  margin-right: 15px;
  color: white;
`


const navbar = () => {
  return (
    <DivInitial>
        <h1>Orma Test</h1> 
        <Colum>
            <StyledIcon/>
            <Lists>
                <StyledLink href="/">Home</StyledLink>
            </Lists>
            <Lists>
                <StyledLink href="/about">About</StyledLink>
            </Lists>  
            <Lists>
                <StyledLink href="/cripto">Cripto</StyledLink>
            </Lists>        
            <Lists>
                <StyledLink href="/contact">Contact</StyledLink>
            </Lists>
        </Colum>

    </DivInitial>
   
  )
}


export default navbar