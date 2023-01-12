import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useDarkModeContext } from '../../../contexts/DarkMode';

import { HeaderContainer, DarkModeContainer } from './styled';

import { DarkModeSwitcher } from '../../DarkModeSwitcher';

import logoNetflixImage from '/public/assets/netflix-logo.svg';
import perfilImage from '/public/assets/perfil.png';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <HeaderContainer darkMode={darkMode} blackBackground={blackHeader}>
      <Image
        src={logoNetflixImage}
        alt="Netflix"
        priority
        className="netflix"
      />
      <nav>
        <Link className="" href={'/'}>
          Início
        </Link>
        <Link className="" href={'/trendings'}>
          Recomendados
        </Link>
        <Link className="" href={'/toprated'}>
          Em Alta
        </Link>
        <Link className="" href={'/movies'}>
          Filmes
        </Link>
      </nav>
      <DarkModeContainer>
        <DarkModeSwitcher />
      </DarkModeContainer>
      <Image src={perfilImage} alt="perfil" priority className="perfil" />
    </HeaderContainer>
  );
};
