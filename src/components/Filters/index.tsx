import { useMovies } from 'contexts/MoviesContext'
import * as S from './styles'
import { RiCloseCircleFill } from 'react-icons/ri'
import cx from 'classnames'

export function Filters() {
  const { genres, setSelectedGenre, selectedGenre } = useMovies()

  const handleClick = (genreId) => {
    if (selectedGenre.includes(genreId)) {
      setSelectedGenre(selectedGenre.filter((id) => id !== genreId))
    } else {
      setSelectedGenre([...selectedGenre, genreId])
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
        <S.FilterBy>Filtre por:</S.FilterBy>

        <S.FilterButtons>
          {genres?.map((genre) => (
            <S.Button
              key={genre.id}
              type="button"
              className={cx({
                active: selectedGenre?.includes(genre.id)
              })}
              onClick={() => handleClick(genre.id)}
            >
              {genre.name}

              {selectedGenre?.includes(genre.id) && (
                <S.CloseBtn>
                  <RiCloseCircleFill size={20} />
                </S.CloseBtn>
              )}
            </S.Button>
          ))}
        </S.FilterButtons>
      </S.Content>
    </S.Container>
  )
}
