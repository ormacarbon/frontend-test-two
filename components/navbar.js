import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const DivInitial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  height: 30px;
  @media (max-width: 576px) {
    
  }
`

const Lists = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0 5px;

`

const Colum = styled.ul`
  display: flex;
  padding: 0 5px;
  align-items: center;
  @media (min-width: 768px) {   
}
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const StyledIcon = styled(DarkModeOutlinedIcon)`
  margin-right: 20px;
`

const navbar = () => {
  return (
    <DivInitial>
        <h2>Orma Test</h2> 
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
                <StyledLink href="/contact">Blog</StyledLink>
            </Lists>
        </Colum>

    </DivInitial>
   
  )
}


export default navbar