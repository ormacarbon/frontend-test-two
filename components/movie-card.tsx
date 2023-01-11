import { MovieContainer, MoviePoster } from '../styles/movie-poster';

export default function MovieCard(props) {
  const { movieProps } = props;

  const movieBanner = `https://image.tmdb.org/t/p/w500${movieProps.poster_path}`

  return (
    <MovieContainer>
      <MoviePoster alt={movieProps.title} src={movieBanner} />
      {/* <MovieTitle>
        {movieProps.title}
      </MovieTitle> */}
    </MovieContainer>
  )
}