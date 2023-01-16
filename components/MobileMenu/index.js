import React, { useContext } from 'react';
import Image from 'next/image';
import { RouteContext } from '../../context/routeContext';
import Button from '../Button';
import { Container, Header } from './styles';
import Pokeball from '/public/pokeball-logo.svg';

import Hamburger from 'hamburger-react'

function MobileMenu() {
  const { menuOpen, setMenuOpen } = useContext(RouteContext)

  return(
    <Container>
      <Header>
        <Image src={Pokeball} alt="Pokéball Icon" height={56}/>
        <h2><span className='minor-text'>Pokémon</span> Universe .</h2>
      </Header>
      <Button 
        rounded 
        size="xs" 
        hoverColor="primary300"
        onClick={() => setMenuOpen(!menuOpen)} 
        icon={
          <Hamburger rounded size={24} toggled={menuOpen} label="Show menu" />
        }
      />
    </Container>
  )
}
export default MobileMenu;