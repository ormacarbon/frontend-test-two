import React, { useState } from 'react'
import { Container, Header, List } from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { SquaresFour, BookBookmark, CircleHalfTilt, EggCrack, ImageSquare, PawPrint } from 'phosphor-react'

import Pokeball from '/assets/pokeball-logo.svg'
import Button from '../Button'

function NavBar() {
  const router = useRouter()
  const[selectedOption, setSelectedOption] = useState(router.pathname)
  
  const handleOptionClick = (option) => {
    setSelectedOption(option)
    router.push(`/${option}`)
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
            <Button 
              title="Overview"
              active={selectedOption === "/overview"} 
              onClick={() => handleOptionClick("/overview")} 
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
              active={selectedOption === "/pokedex"} 
              onClick={() => handleOptionClick("/pokedex")}  
              icon={<BookBookmark size={32} weight="fill" />}
              flex
              color="transparent"
              activeColor="primary200"
              hoverColor="gray500"
            />
          </li>

          <li>
            <Button 
              title="Pokémons"
              active={selectedOption === "/pokemon"} 
              onClick={() => handleOptionClick("/pokemon")} 
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