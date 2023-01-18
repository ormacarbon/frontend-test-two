import React from 'react';
import { MainContainer } from './styles';

// Hero Component to be used in the about and contact page
// This component receive children which can be modified in each separate component

const Hero = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Hero;
