import { useFormatter } from '../../utils/formatter';
import {
  FeaturedMovieContainer,
  FeaturedMovieVerticalEffect,
  FeaturedMovieHorizontalEffect,
  FeaturedMovieInfo,
  FeaturedButtons,
  FeaturedGenres
} from './styled';

export const FeaturedMovie = ({ movie }) => {
  const formatter = useFormatter();

  let firstDate = new Date(movie.info.first_air_date);
  let genres = [];
  for (let i in movie.info.genres) {
    genres.push(movie.info.genres[i].name);
  }

  return (
    <FeaturedMovieContainer backgroundImage={movie.info.backdrop_path}>
      <FeaturedMovieVerticalEffect>
        <FeaturedMovieHorizontalEffect>
          <h2>
            {movie.info.original_name
              ? movie.info.original_name
              : movie.info.title}
          </h2>
          <FeaturedMovieInfo>
            {movie.info.vote_average > 0 && (
              <span className="points">{movie.info.vote_average} pontos</span>
            )}
            {movie.info.first_air_date && (
              <span className="year">{firstDate.getFullYear()}</span>
            )}
            {movie.info.release_date && (
              <span className="year">
                {new Date(movie.info.release_date).getFullYear()}
              </span>
            )}
            {movie.info.runtime && (
              <span className="seasons">
                {formatter.formatTimeThroghMinutes(movie.info.runtime)}
              </span>
            )}
            {movie.info.number_of_seasons && (
              <span className="seasons">
                {movie.info.number_of_seasons} temporada
                {movie.info.number_of_seasons > 1 ? 's' : ''}
              </span>
            )}
          </FeaturedMovieInfo>
          <p className="description">
            {movie.info.overview
              ? movie.info.overview
              : '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt veritatis obcaecati accusantium commodi optio, ipsum illum, temporibus repellendus, sint magnam! Cumque rerum quasi vero perferendis at, placeat distinctio nostrum.'}
          </p>
          <FeaturedButtons>
            <a className="button--watch" href={`/watch/${movie.info.id}`}>
              ▶ Assistir
            </a>
            <a className="button--my-list" href={`/list/add/${movie.info.id}`}>
              + Minha Lista
            </a>
          </FeaturedButtons>
          <FeaturedGenres>
            <strong>Gêneros: </strong>
            {genres.join(', ')}
          </FeaturedGenres>
        </FeaturedMovieHorizontalEffect>
      </FeaturedMovieVerticalEffect>
    </FeaturedMovieContainer>
  );
};
