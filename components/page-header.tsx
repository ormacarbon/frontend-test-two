import Link from 'next/link';
import { useContext } from 'react';
import styled from "styled-components";
import { applicationContext } from '../context/context';
import { HeaderLogo, HeaderLogoContainer, HeaderLogoText } from '../styles/header';
import HeaderItem from './header-item';
import MovieSearchInput from './movie-search-input';


const PageHeader = () => {
  const { innerWidth } = useContext(applicationContext);
  const isMobile = innerWidth < 1280;

  const Header = styled.ul`
  display: flex;
  margin: 2rem auto;
  justify-content: center;
  font-size: 0.875rem;
  align-items: center;
  justify-content: ${!isMobile ? 'space-between' : 'center'} ;
  z-index: 2;
  position: relative;
  font-weight: 600;
  padding-inline: 2rem;
  white-space: nowrap;
`

  const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: ${innerWidth < 600 ? 'column' : 'row'};
  `

  const ItemHeaderContainer = styled.div`
    display: flex;
  `

  const SearchInputContainer = styled.div`
    
  `

  const headerItems = [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '/popular',
      title: 'Populares'
    },
    {
      href: '/in-theater',
      title: 'Em cartaz'
    },
    {
      href: '/soon-in-theater',
      title: 'Em breve'
    }
  ]

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
        <ItemHeaderContainer>
          {headerItems.map(
            item => (
              <HeaderItem title={item.title} href={item.href} />
            )
          )}
        </ItemHeaderContainer>
        <SearchInputContainer>
          <MovieSearchInput />
        </SearchInputContainer>
      </HeaderUl>
    </Header>
  )
}

export default PageHeader;
