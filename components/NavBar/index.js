import { Container, Header, List } from './styles'
import React, { useState } from 'react'
import Image from 'next/image'
import { SquaresFour, BookBookmark, CircleHalfTilt, EggCrack, ImageSquare, PawPrint } from 'phosphor-react'

import Pokeball from '/assets/pokeball-logo.svg'
import IconButton from '../IconButton'

function NavBar() {
  const[selectedOption, setSelectedOption] = useState("overview")

  const handleOptionClick = (option) => {
    console.log(option);
    setSelectedOption(option);
  };

  return(
    <Container>
      <Header>
        <Image src={Pokeball} alt="Pokéball Icon" height={40}/>
        <h2><span className='minor-text'>Pokémon</span> Pokédex .</h2>
      </Header>

      <nav>
        <List>
          <li>
            <IconButton 
              title="Overview"
              active={selectedOption === "overview"} 
              onClick={() => handleOptionClick("overview")} 
              icon={<SquaresFour size={32} weight="fill" />}
            />
          </li>

          <li>
            <IconButton 
              title="Pokédex"
              active={selectedOption === "pokedex"} 
              onClick={() => handleOptionClick("pokedex")}  
              icon={<BookBookmark size={32} weight="fill" />}
            />
          </li>

          <li>
            <IconButton 
              title="Pokémons"
              active={selectedOption === "pokemon"} 
              onClick={() => handleOptionClick("pokemon")} 
              icon={<PawPrint size={32} weight="fill" />}
            />
          </li>

          <li>
            <IconButton
              title="Pokéballs"
              disabled 
              icon={<CircleHalfTilt size={32} weight="fill" />}
            />
          </li>

          <li>
            <IconButton 
              title="Items"
              disabled 
              icon={<EggCrack size={32} weight="fill" />}
            />
          </li>

          <li>
            <IconButton
              title="Gallery"
              disabled 
              icon={<ImageSquare size={32} weight="fill" />}
            />
          </li>
        </List>
      </nav>
    </Container>
  )
}
export default NavBar;