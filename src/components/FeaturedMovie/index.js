import React from 'react';
import {
  FeaturedMovieContainer,
  FeaturedMovieVerticalEffect,
  FeaturedMovieHorizontalEffect,
  FeaturedMovieInfo,
  FeaturedButtons,
  FeaturedGenres
} from './styled';

export const FeaturedMovie = ({ movie }) => {
  let firstDate = new Date(movie.first_air_date);
  let genres = [];
  for (let i in movie.genres) {
    genres.push(movie.genres[i].name);
  }

  return (
    <FeaturedMovieContainer backgroundImage={movie.backdrop_path}>
      <FeaturedMovieVerticalEffect>
        <FeaturedMovieHorizontalEffect>
          <h2>{movie.original_name}</h2>
          <FeaturedMovieInfo>
            <span className="points">{movie.vote_average} pontos</span>
            {movie.first_air_date && (
              <span className="year">{firstDate.getFullYear()}</span>
            )}
            <span className="seasons">
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons > 1 ? 's' : ''}
            </span>
          </FeaturedMovieInfo>
          <p className="description">
            {movie.overview
              ? movie.overview
              : '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt veritatis obcaecati accusantium commodi optio, ipsum illum, temporibus repellendus, sint magnam! Cumque rerum quasi vero perferendis at, placeat distinctio nostrum.'}
          </p>
          <FeaturedButtons>
            <a className="button--watch" href={`/watch/${movie.id}`}>
              ▶ Assistir
            </a>
            <a className="button--my-list" href={`/list/add/${movie.id}`}>
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
