import * as Styled from './styled'

export type NavBarProps = {
  genres: {
    id: number
    name: string
  }[]
}

export const NavBar = ({ genres }: NavBarProps): JSX.Element => {
  return (
    <Styled.Container>
      {genres.map(genre => (
        <p key={genre.name}>{genre.name}</p>
      ))}
    </Styled.Container>
  )
}