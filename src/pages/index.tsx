import * as S from './home.styles'

import { Filters } from 'components/Filters'
import { Header } from 'components/Header'
import { MovieCard } from 'components/MovieCard'
import { useMovies } from 'contexts/MoviesContext'
import { tmdbImage } from 'constants/url'

export default function Home() {
  const { movies, isLoading } = useMovies()

  return (
    <S.Container>
      <Header />
      <Filters />

      <S.CardContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={tmdbImage(movie.poster_path, 185)}
            />
          ))
        )}
      </S.CardContainer>
    </S.Container>
  )
}
