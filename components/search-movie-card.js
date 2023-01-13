import Link from 'next/link';
import { SearchDescriptionContainer, SearchMovieContainer, SearchMovieDescription, SearchMovieOriginalTitle, SearchMoviePoster, SearchMovieRating, SearchMovieRatingContainer, SearchMovieTitle } from '../styles/search';

export default function SearchMovieCard(props) {
  const { movieProps } = props;

  const movieBanner = `https://image.tmdb.org/t/p/w500${movieProps.poster_path}`

  return (
    <Link href={{
      pathname: '/movie',
      query: { movieId: movieProps.id },
    }}>
      <SearchMovieContainer>
        <SearchMoviePoster alt={movieProps.title} src={movieBanner} />
        <SearchDescriptionContainer>
          <SearchMovieTitle >{movieProps.title}</SearchMovieTitle>
          <SearchMovieOriginalTitle>Título original: {movieProps.original_title}</SearchMovieOriginalTitle>
          <SearchMovieDescription>{movieProps.overview}</SearchMovieDescription>
          <SearchMovieRatingContainer>
            <span>⭐</span>
            <SearchMovieRating>{movieProps.vote_average}</SearchMovieRating>
          </SearchMovieRatingContainer>
        </SearchDescriptionContainer>
      </SearchMovieContainer>
    </Link>
  )
}