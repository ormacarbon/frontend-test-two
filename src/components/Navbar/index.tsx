import Link from "next/link";
import { useRouter } from "next/router";
import { House } from "phosphor-react";
import { useEffect, useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { About, CharactersSession, Container, Title } from "./styles";

export function Navbar() {
  const [windowSize, setWindowSize] = useState([0, 0
  ]);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }

  });  

  return (
    <Container>
    {windowSize[0] <= 720 ?
      <>
          <House
            size={32}
            color={'white'}
            onClick={() => setIsOpen(prevState => !prevState)}
          />
        {isOpen === true ? <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
      </>
      
    :  
      <>
        <Title>
          <Link href="/">Teste - Orma Carbon</Link>
        </Title>
        <About>
          <Link href="/about">
            About
          </Link>
        </About>
        <CharactersSession>
          {/* We redirect the user to page=2 because the first page of the API is lacking data */}
          <Link as='/gotItems?' href="/gotItems?page=2">
            Characters
          </Link>
        </CharactersSession>
      </>
    }
  </Container>
  )
}