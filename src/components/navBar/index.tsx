import { useMoviesContext } from '@contexts/moviesContext'
import { Dispatch, SetStateAction } from 'react'
import * as Styled from './styled'

export type NavBarProps = {
  genres: {
    id: number
    name: string
  }[]
  mobileMenuVisible: boolean
  setMobileMenuVisible: Dispatch<SetStateAction<boolean>>
}

export const NavBar = ({
  genres,
  mobileMenuVisible,
  setMobileMenuVisible
}: NavBarProps): JSX.Element => {
  const { setGenreId } = useMoviesContext()

  return (
    <Styled.Container mobileMenuVisible={mobileMenuVisible}>
      {genres.map(genre => (
        <p
          key={genre.name}
          onClick={() => {
            setGenreId(genre.id)
            setMobileMenuVisible(!mobileMenuVisible)
          }}
        >{genre.name}</p>
      ))}
    </Styled.Container>
  )
}