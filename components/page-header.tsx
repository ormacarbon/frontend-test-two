import Link from 'next/link';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Header, HeaderLogo, HeaderLogoContainer, HeaderLogoText, HeaderUl, ItemHeaderContainer, SearchInputContainer, ThemeTogglerContainer } from '../styles/header';
import HeaderItem from './header-item';
import MovieSearchInput from './movie-search-input';
import { useTheme } from 'next-themes'



const PageHeader = () => {
  const { theme, setTheme } = useTheme()

  const headerItems = [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '/popular',
      title: 'Popular'
    },
    {
      href: '/in-theater',
      title: 'Now playing'
    },
    {
      href: '/soon-in-theater',
      title: 'Coming soon'
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
            (item, index) => (
              <HeaderItem key={index} title={item.title} href={item.href} />
            )
          )}

        </ItemHeaderContainer>
        <SearchInputContainer>
          <div>
            <MovieSearchInput />
          </div>
          <ThemeTogglerContainer onClick={() => setTheme(theme === 'dark' ? 'white' : 'dark')}>
            {theme === 'white' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </ThemeTogglerContainer>
        </SearchInputContainer>
      </HeaderUl>
    </Header>
  )
}

export default PageHeader;
