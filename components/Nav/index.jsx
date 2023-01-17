import { useContext } from 'react'

import Image from 'next/image'

import { ThemeContext } from '../../pages/_app'

import { Content, Link } from './styles'

export default function Nav() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <Content>
      <Link href="/"><h1>Home</h1></Link>
      <Link href="/pokemon/1"><h1>Pokemon</h1></Link>
      <Link href="/pokemon/filter/charizard"><h1>Search</h1></Link>
      {theme.mode == "light" ? (
        <Image
          src="/assets/sun.svg"
          alt="sun"
          onClick={toggleTheme}
          width={35}
          height={35}
        />
      ) : (
        <Image
          src="/assets/moon.svg"
          alt="moon"
          onClick={toggleTheme}
          width={35}
          height={35}
        />
      )}
    </Content>
  );
}
