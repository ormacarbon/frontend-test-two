import { Dispatch, SetStateAction } from 'react'

import { BiMoviePlay } from 'react-icons/bi'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import * as Styled from './styled'

export type HeaderProps = {
  isDarkTheme: boolean
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ isDarkTheme, setIsDarkTheme }: HeaderProps): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Logo>
        <BiMoviePlay size='40' />
        <span>BM.play</span>
      </Styled.Logo>

      <Styled.UpdateTheme>
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
      </Styled.UpdateTheme>
    </Styled.Container>
  )
}