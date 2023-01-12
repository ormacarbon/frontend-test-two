import { useMovies } from 'contexts/MoviesContext'

import * as S from './home.styles'

import { Filters } from 'components/Filters'
import { Header } from 'components/Header'
import { MovieCard } from 'components/MovieCard'
import { Pagination } from 'components/Pagination'

import { tmdbImage } from 'constants/url'
import Link from 'next/link'

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
          movies?.results?.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <MovieCard
                title={movie.title}
                date={movie.release_date}
                poster={tmdbImage(movie.poster_path, 185)}
              />
            </Link>
          ))
        )}
      </S.CardContainer>

      <S.PaginationContainer>
        <Pagination />
      </S.PaginationContainer>
    </S.Container>
  )
}
