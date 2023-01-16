import { useState, useEffect } from 'react';

import TMDB from '../../services/tmdb';
import { useFormatter } from '../../utils/formatter';
import {
  FeaturedMovieContainer,
  FeaturedMovieVerticalEffect,
  FeaturedMovieHorizontalEffect,
  FeaturedMovieInfo,
  FeaturedButtons,
  FeaturedGenres
} from './styled';

export const FeaturedMovie = ({ movie, trailler }) => {
  const formatter = useFormatter();

  const [traillerTreated, setTraillerTreated] = useState('');

  let firstDate = new Date(movie.info.first_air_date);
  let genres = [];
  for (let i in movie.info.genres) {
    genres.push(movie.info.genres[i].name);
  }

  useEffect(() => {
    if (trailler) {
      setTraillerTreated(`https://www.youtube.com/watch?v=${trailler}`);
    } else {
      if (movie.info.original_name) {
        let searchTag = movie.info.original_name
          .split(' ')
          .map((iten) => iten.concat('+'))
          .concat('Trailler')
          .join('');
        setTraillerTreated(
          `https://www.youtube.com/results?search_query=${searchTag}`
        );
      } else {
        let searchTag = movie.info.title
          .split(' ')
          .map((iten) => iten.concat('+'))
          .concat('Trailler')
          .join('');
        setTraillerTreated(
          `https://www.youtube.com/results?search_query=${searchTag}`
        );
      }
    }
  }, [movie.info.original_name, movie.info.title, trailler]);

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
            <a
              className="button--watch"
              target="_blank"
              href={traillerTreated}
              rel="noreferrer"
            >
              ▶ Trailler
            </a>
            <a
              className="button--my-list"
              href=""
              onClick={(e) => e.preventDefault()}
            >
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
