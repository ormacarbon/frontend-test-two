import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

 const Title = styled.h1`
  color:    blue;
`;


export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          src='/images/pokemon.png'
          width='80'
          height='40'
          alt='Pokémon-logo'
        />
        <Title>Pokémon</Title>
      </div>
      <ul>
        <li>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
