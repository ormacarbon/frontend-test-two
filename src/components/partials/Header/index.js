import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useDarkModeContext } from '../../../contexts/DarkMode';

import { HeaderContainer } from './styled';

import logoNetflixImage from '/public/assets/netflix-logo.svg';
import perfilImage from '/public/assets/perfil.png';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <HeaderContainer darkMode={darkMode}>
      <Image
        src={logoNetflixImage}
        alt="Netflix"
        priority
        className="netflix"
      />
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/trendings'}>Recomendados</Link>
        <Link href={'/toprated'}>Em Alta</Link>
        <Link href={'/movies'}>Filmes</Link>
      </nav>
      <Image src={perfilImage} alt="perfil" priority className="perfil" />
    </HeaderContainer>
  );
};
