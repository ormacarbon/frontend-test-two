import React from 'react'
import { MainContainer } from './styles';

const Hero = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Hero;
