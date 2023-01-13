/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import TMDB from '../../../services/tmdb';
import {
  TrendingSlugIdContainer,
  TrendingSlugIdTitle,
  TrendingSlugIdGenres,
  TrendingSlugIdEffectHorizontal,
  TrendingSlugIdEffectVertical,
  TrendingSlugIdDescription,
  TrendingSlugIdDuration,
  TrendingSlugIdVoteAverage,
  TrendingSlugIdVotes,
  TrendingSlugIdSlogan,
  TrendingSlugIdVoteProducer
} from '../../../styles/Trendings[slug][id]';
import { useFormatter } from '../../../utils/formatter';

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);

  const movieInformations = await TMDB.getMovieInfo(query.id, query.slug);

  console.log(movieInformations);

  return {
    props: {
      movieInformations
    }
  };
};

const TrendingsFilmId = ({ movieInformations }) => {
  console.log(movieInformations);

  const formatter = useFormatter();

  return (
    <TrendingSlugIdContainer
      backgroundImage={`url(${TMDB.getImage(movieInformations.backdrop_path)})`}
      style={{}}
    >
      <TrendingSlugIdEffectVertical>
        <TrendingSlugIdEffectHorizontal>
          <TrendingSlugIdTitle>
            {movieInformations.title
              ? movieInformations.title
              : movieInformations.original_name}
          </TrendingSlugIdTitle>

          <TrendingSlugIdDuration>
            <span>
              {formatter.formatDate(
                movieInformations.release_date
                  ? movieInformations.release_date
                  : movieInformations.first_air_date
              )}
            </span>
            {movieInformations.seasons ? (
              <span>
                {movieInformations.seasons.length} temporada
                {movieInformations.seasons.length > 1 ? 's' : ''}
              </span>
            ) : (
              <span>
                {formatter.formatTimeThroghMinutes(movieInformations.runtime)}
              </span>
            )}
          </TrendingSlugIdDuration>

          <TrendingSlugIdDescription>
            {movieInformations.overview}
          </TrendingSlugIdDescription>

          <TrendingSlugIdSlogan>
            <h2>Slogan:</h2>
            <h3>{movieInformations.tagline}</h3>
          </TrendingSlugIdSlogan>
          <TrendingSlugIdGenres>
            <h2>Generos:</h2>
            {movieInformations.genres.map((genre, index) => (
              <div key={index}>
                <h3>{genre.name},</h3>{' '}
              </div>
            ))}
          </TrendingSlugIdGenres>

          <TrendingSlugIdVotes>
            <h2>Votos:</h2>
            <span>{Math.round(movieInformations.vote_count)}</span>
          </TrendingSlugIdVotes>

          <TrendingSlugIdVoteAverage>
            <h2>Média de votos:</h2>
            <span>{parseFloat(movieInformations.vote_average).toFixed(2)}</span>
          </TrendingSlugIdVoteAverage>

          <TrendingSlugIdVoteProducer>
            <h2>Produzido por:</h2>
            <div>
              {movieInformations.production_companies.map((company, index) => (
                <div key={index}>
                  {company.logo_path && (
                    <img
                      src={TMDB.getImage(company.logo_path)}
                      alt={company.name}
                      style={{
                        width: '100%',
                        maxWidth: '10rem',
                        height: 'auto'
                      }}
                    />
                  )}
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
          </TrendingSlugIdVoteProducer>
        </TrendingSlugIdEffectHorizontal>
      </TrendingSlugIdEffectVertical>
    </TrendingSlugIdContainer>
  );
};

export default TrendingsFilmId;
