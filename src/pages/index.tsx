import { useMovies } from 'contexts/MoviesContext'

import * as S from 'styles/pageStyles/home.styles'

import Link from 'next/link'

import { Filters } from 'components/Filters'
import { MovieCard } from 'components/MovieCard'
import { Pagination } from 'components/Pagination'
import { LoadingSkeleton } from 'components/LoadingSkelenton'

import { tmdbImage } from 'constants/url'

export default function Home() {
  const { movies, isLoading } = useMovies()

  return (
    <S.Container>
      <Filters />

      {isLoading ? (
        <S.LoadingContainer>
          <LoadingSkeleton />
        </S.LoadingContainer>
      ) : (
        <S.CardContainer>
          <S.CardWrap>
            {movies?.results.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <MovieCard
                  title={movie.title}
                  date={movie.release_date}
                  poster={tmdbImage(movie.poster_path, 185)}
                />
              </Link>
            ))}
          </S.CardWrap>
        </S.CardContainer>
      )}

      {isLoading === false && (
        <S.PaginationContainer>
          <Pagination />
        </S.PaginationContainer>
      )}
    </S.Container>
  )
}
