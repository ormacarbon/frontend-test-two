import Link from 'next/link';
import { MovieContainer, MoviePoster } from '../styles/movie-poster';

export default function MovieCard(props) {
  const { movieProps } = props;

  const movieBanner = `https://image.tmdb.org/t/p/w500${movieProps.poster_path}`

  return (
    <Link href={{
      pathname: '/movie',
      query: { movieId: movieProps.id },
    }}>
      <MovieContainer>
        <MoviePoster alt={movieProps.title || movieProps.original_title} src={movieBanner} />
      </MovieContainer>
    </Link>
  )
}