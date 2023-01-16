import React, { useContext, useState } from 'react'
import { Container, Header, List, DarkMode } from './styles'
import { RouteContext } from '../../context/routeContext';
import { ThemeContext } from '../../context/themeContext';
import Image from 'next/image'
import { 
  SquaresFour, 
  BookBookmark, 
  CircleHalfTilt, 
  EggCrack, 
  ImageSquare, 
  PawPrint,
  GearSix, 
  Sun,
  Moon
} from 'phosphor-react'

import Pokeball from '/public/pokeball-logo.svg'
import Button from '../Button'

function NavBar() {
  const { currentRoute, router, toPokemonLink, menuOpen } = useContext(RouteContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return(
    <Container isOpen={menuOpen}>
      <Header>
        <Image src={Pokeball} alt="Pokéball Icon" height={40}/>
        <h2><span className='minor-text'>Pokémon</span> Universe .</h2>
      </Header>

      <nav>
        <List>
          <li>
            <Button 
              title="Overview"
              active={!currentRoute.includes("pokemon") && !currentRoute.includes("pokedex")} 
              onClick={() => router.push("/overview")} 
              icon={<SquaresFour size={28} weight="fill" />}s
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>

          <li>
            <Button 
              title="Pokédex"
              active={currentRoute.includes("pokedex")} 
              onClick={() => router.push("/pokedex")}  
              icon={<BookBookmark size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>

          <li>
            <Button 
              title="Pokémon"
              active={currentRoute.includes("pokemon")} 
              onClick={() => toPokemonLink("bulbasaur")} 
              icon={<PawPrint size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>

          <li>
            <Button
              title="Pokéballs"
              disabled 
              icon={<CircleHalfTilt size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>

          <li>
            <Button 
              title="Items"
              disabled 
              icon={<EggCrack size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>

          <li>
            <Button
              title="Gallery"
              disabled 
              icon={<ImageSquare size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>
          <li>
            <Button
              title="Settings"
              disabled 
              icon={<GearSix size={28} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
            />
          </li>
        </List>
      </nav>
      <DarkMode>
        <Button
          title={!darkMode ? "Dark mode" : "Light mode"}
          icon={!darkMode ? <Moon size={28} weight="fill" /> : <Sun size={28} weight="bold" />}
          flex
          color="transparent"
          onClick={() => setDarkMode(!darkMode)}
        />
      </DarkMode>
      
    </Container>
  )
}
export default NavBar;