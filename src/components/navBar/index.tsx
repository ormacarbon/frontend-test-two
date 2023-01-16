import { useMoviesContext } from '@contexts/moviesContext'
import * as Styled from './styled'

export type NavBarProps = {
  genres: {
    id: number
    name: string
  }[]
}

export const NavBar = ({ genres }: NavBarProps): JSX.Element => {
  const { setGenreId } = useMoviesContext()

  return (
    <Styled.Container>
      {genres.map(genre => (
        <p
          key={genre.name}
          onClick={() => setGenreId(genre.id)}
        >{genre.name}</p>
      ))}
    </Styled.Container>
  )
}