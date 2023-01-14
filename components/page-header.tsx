import Link from 'next/link';
import { useContext } from 'react';
import styled from "styled-components";
import { applicationContext } from '../context/context';
import { HeaderLogo, HeaderLogoContainer, HeaderLogoText, ItemHeaderContainer, Header, HeaderUl, SearchInputContainer, ThemeTogglerContainer } from '../styles/header';
import HeaderItem from './header-item';
import MovieSearchInput from './movie-search-input';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';



const PageHeader = (props) => {
  const { theme, toggleTheme } = props;

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
      <Link href={'/'}>
        <HeaderLogoContainer>
          <HeaderLogo src='/movie-roll.png' />
          <HeaderLogoText>MovieRoll</HeaderLogoText>
        </HeaderLogoContainer>
      </Link>
      <HeaderUl>
        <ItemHeaderContainer>
          {headerItems.map(
            item => (
              <HeaderItem title={item.title} href={item.href} />
            )
          )}

        </ItemHeaderContainer>
        <SearchInputContainer>
          <div>
            <MovieSearchInput />
          </div>
          <ThemeTogglerContainer onClick={() => toggleTheme()}>
            {theme === 'white-theme' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </ThemeTogglerContainer>
        </SearchInputContainer>
      </HeaderUl>
    </Header>
  )
}

export default PageHeader;
