import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDarkModeContext } from '../../../contexts/DarkMode';
import { usePageActiveContext } from '../../../contexts/PageActive';

import {
  HeaderContainer,
  DarkModeContainer,
  HeaderNavigationMobile,
  HeaderNavigationDesktop,
  HeaderShowModal
} from './styled';

import { DarkModeSwitcher } from '../../DarkModeSwitcher';

import logoNetflixImage from '/public/assets/netflix-logo.svg';
import perfilImage from '/public/assets/perfil.png';

export const Header = () => {
  const { darkMode } = useDarkModeContext();
  const { pageActive } = usePageActiveContext();

  const [blackHeader, setBlackHeader] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

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

  const leaveMenuMobile = () => {
    setMenuMobileOpen(false);
  };

  return (
    <HeaderContainer darkMode={darkMode} blackBackground={blackHeader}>
      <Image
        src={logoNetflixImage}
        alt="Netflix"
        priority
        className="netflix"
      />
      <HeaderShowModal>
        <span
          onMouseOver={() => setMenuMobileOpen(true)}
          onMouseLeave={() => setMenuMobileOpen(false)}
          mobileOpen={menuMobileOpen}
        >
          Navegar{' '}
        </span>
        <HeaderNavigationMobile
          open={menuMobileOpen}
          onMouseOver={() => setMenuMobileOpen(true)}
          onMouseLeave={() => setMenuMobileOpen(false)}
        >
          <Link className={pageActive === '/' ? 'active' : ''} href={'/'}>
            Início
          </Link>
          <Link
            className={pageActive === '/movies' ? 'active' : ''}
            href={'/movies'}
          >
            Filmes
          </Link>
          <Link
            className={pageActive === '/series' ? 'active' : ''}
            href={'/series'}
          >
            Séries
          </Link>
          <Link
            className={pageActive === '/trendings' ? 'active' : ''}
            href={'/trendings'}
          >
            Recomendados
          </Link>
          <Link
            className={pageActive === '/toprated' ? 'active' : ''}
            href={'/toprated'}
          >
            Em Alta
          </Link>
        </HeaderNavigationMobile>
      </HeaderShowModal>

      <HeaderNavigationDesktop>
        <Link className={pageActive === '/' ? 'active' : ''} href={'/'}>
          Início
        </Link>
        <Link
          className={pageActive === '/movies' ? 'active' : ''}
          href={'/movies'}
        >
          Filmes
        </Link>
        <Link
          className={pageActive === '/series' ? 'active' : ''}
          href={'/series'}
        >
          Séries
        </Link>
        <Link
          className={pageActive === '/trendings' ? 'active' : ''}
          href={'/trendings'}
        >
          Recomendados
        </Link>
        <Link
          className={pageActive === '/toprated' ? 'active' : ''}
          href={'/toprated'}
        >
          Em Alta
        </Link>
      </HeaderNavigationDesktop>
      <DarkModeContainer>
        <DarkModeSwitcher />
      </DarkModeContainer>
      <Image src={perfilImage} alt="perfil" priority className="perfil" />
    </HeaderContainer>
  );
};
