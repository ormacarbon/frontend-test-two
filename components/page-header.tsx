import Link from 'next/link';
import { useContext } from 'react';
import styled from "styled-components";
import { applicationContext } from '../context/context';
import { HeaderLi, HeaderLogo, HeaderLogoContainer, HeaderLogoText, HeaderUl } from '../styles/header';
import MovieSearchInput from './movie-search-input';


const PageHeader = () => {
  const { innerWidth } = useContext(applicationContext);
  const isMobile = innerWidth < 1280;

  const Header = styled.ul`
  display: flex;
  margin: 2rem auto;
  justify-content: center;
  height: 2rem;
  font-size: 0.875rem;
  align-items: center;
  justify-content: ${!isMobile ? 'space-between' : 'center'} ;
  z-index: 2;
  position: relative;
  font-weight: 600;
  padding-inline: 2rem;
`

  return (
    <Header>
      {!isMobile && (
        <Link href={'/'}>
          <HeaderLogoContainer>
            <HeaderLogo src='/movie-roll.png' />
            <HeaderLogoText>MovieRoll</HeaderLogoText>
          </HeaderLogoContainer>
        </Link>
      )}
      <HeaderUl>
        <Link href={'/'}>
          <HeaderLi>Home</HeaderLi>
        </Link>
        <Link href={'/popular'}>
          <HeaderLi>Filmes populares</HeaderLi>
        </Link>
        <Link href={'/in-theater'}>
          <HeaderLi>Filmes em cartaz</HeaderLi>
        </Link>
        <MovieSearchInput />
      </HeaderUl>
    </Header>
  )
}

export default PageHeader;
