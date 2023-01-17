import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { BiMoviePlay } from 'react-icons/bi'
import { MdDarkMode, MdFavorite, MdLightMode } from 'react-icons/md'

import * as Styled from './styled'

export type HeaderProps = {
  isDarkTheme: boolean
  mobileMenuVisible: boolean
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
  setMobileMenuVisible: Dispatch<SetStateAction<boolean>>
}

export const Header = ({
  isDarkTheme,
  setIsDarkTheme,
  mobileMenuVisible,
  setMobileMenuVisible,
}: HeaderProps): JSX.Element => {
  const { push } = useRouter()

  return (
    <Styled.Container isDarkTheme={isDarkTheme}>
      <Styled.Logo
        isDarkTheme={isDarkTheme}
        onClick={() => push('/bm-play/home')}
      >
        <BiMoviePlay size='40' />
        <span>BM.play</span>
      </Styled.Logo>

        <Styled.MenuActions isDarkTheme={isDarkTheme}>
          {isDarkTheme ? (
            <MdLightMode
              size='25'
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            />
          ): (
            <MdDarkMode
              size='25'
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            />
          )}
          <Styled.FavoriteList
            isDarkTheme={isDarkTheme}
            onClick={() => push('/bm-play/favorites')}
          >
            <MdFavorite fill='#7160C3' size={25} />
            <span>Favoritos</span>
          </Styled.FavoriteList>
          <AiOutlineMenu
            size='25' 
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          />
        </Styled.MenuActions>
    </Styled.Container>
  )
}