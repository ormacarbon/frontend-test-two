import React, { useEffect, useState } from 'react'
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
    router.push(option)
  };

  useEffect(() => {
    setSelectedOption(router.pathname);
  }, [router.pathname])

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
              active={!selectedOption.includes("pokemon") && !selectedOption.includes("pokedex")} 
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
              active={selectedOption.includes("pokedex")} 
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
              active={selectedOption.includes("pokemon")} 
              onClick={() => router.push("/pokemon")} 
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