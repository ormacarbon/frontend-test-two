import React, { useContext } from 'react'
import { Container, Header, List } from './styles'
import { RouteContext } from '../../context/routeContext';
import Image from 'next/image'
import { SquaresFour, BookBookmark, CircleHalfTilt, EggCrack, ImageSquare, PawPrint } from 'phosphor-react'

import Pokeball from '/public/pokeball-logo.svg'
import Button from '../Button'

function NavBar() {
  const { currentRoute, router, toPokemonLink } = useContext(RouteContext);

  return(
    <Container>
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
              icon={<SquaresFour size={32} weight="fill" />}s
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button 
              title="Pokédex"
              active={currentRoute.includes("pokedex")} 
              onClick={() => router.push("/pokedex")}  
              icon={<BookBookmark size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button 
              title="Pokémon"
              active={currentRoute.includes("pokemon")} 
              onClick={() => toPokemonLink("bulbasaur")} 
              icon={<PawPrint size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button
              title="Pokéballs"
              disabled 
              icon={<CircleHalfTilt size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button 
              title="Items"
              disabled 
              icon={<EggCrack size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button
              title="Gallery"
              disabled 
              icon={<ImageSquare size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>
        </List>
      </nav>
    </Container>
  )
}
export default NavBar;