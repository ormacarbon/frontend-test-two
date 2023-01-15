import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'

import { HeaderProps } from 'interfaces/props'

export function Header({ theme, themeToggler }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <Link href="/">
        <Image
          src="/img/logo.svg"
          alt="Imagem centralizada da logo TMDB"
          width={140}
          height={18}
        />
      </Link>

      <S.TogglerButton onClick={themeToggler}>
        {theme === 'light' ? <MdOutlineDarkMode /> : <CiLight />}
      </S.TogglerButton>
    </S.HeaderContainer>
  )
}
