/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useEffect } from 'react';

import { NavigateBefore } from '../../components/NavigateBefore';
import { usePageActiveContext } from '../../contexts/PageActive';
import TMDB from '../../services/tmdb';
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
} from '../../styles/Originals[id]';

import { useFormatter } from '../../utils/formatter';

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);

  const movieInformations = await TMDB.getMovieInfo(query.id);

  console.log(movieInformations);

  return {
    props: {
      movieInformations
    }
  };
};

const TrendingsFilmId = ({ movieInformations }) => {
  const { changePageActive } = usePageActiveContext();
  console.log(movieInformations);

  const formatter = useFormatter();

  useEffect(() => {
    changePageActive(
      `${movieInformations.type === 'movie' ? '/movies' : '/series'}`
    );
  }, [changePageActive, movieInformations.type]);

  return (
    <>
    <Head>
      <title>Originals</title>
    </Head>
      <TrendingSlugIdContainer
        backgroundImage={`url(${TMDB.getImage(
          movieInformations.info.backdrop_path
        )})`}
        style={{}}
      >
        <NavigateBefore href="/originals" />
        <TrendingSlugIdEffectVertical>
          <TrendingSlugIdEffectHorizontal>
            <TrendingSlugIdTitle>
              {movieInformations.info.title
                ? movieInformations.info.title
                : movieInformations.info.original_name}
            </TrendingSlugIdTitle>

            <TrendingSlugIdDuration>
              <span>
                {formatter.formatDate(
                  movieInformations.info.release_date
                    ? movieInformations.info.release_date
                    : movieInformations.info.first_air_date
                )}
              </span>
              {movieInformations.info.seasons ? (
                <span>
                  {movieInformations.info.seasons.length} temporada
                  {movieInformations.info.seasons.length > 1 ? 's' : ''}
                </span>
              ) : (
                <span>
                  {formatter.formatTimeThroghMinutes(
                    movieInformations.info.runtime
                  )}
                </span>
              )}
            </TrendingSlugIdDuration>

            <TrendingSlugIdDescription>
              {movieInformations.info.overview
                ? movieInformations.info.overview
                : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ab id dolores. Veniam reprehenderit praesentium ea modi dolor. Veniam molestias incidunt voluptatem sint nostrum excepturi sapiente ipsam optio corporis soluta!'}
            </TrendingSlugIdDescription>

            {movieInformations.info.slogan && (
              <TrendingSlugIdSlogan>
                <h2>Slogan:</h2>
                <h3>{movieInformations.info.tagline}</h3>
              </TrendingSlugIdSlogan>
            )}
            <TrendingSlugIdGenres>
              <h2>Generos:</h2>
              {movieInformations.info.genres.map((genre, index) => (
                <div key={index}>
                  <h3>{genre.name},</h3>{' '}
                </div>
              ))}
            </TrendingSlugIdGenres>

            <div style={{ display: 'flex', gap: '1.6rem' }}>
              <TrendingSlugIdVotes>
                <h2>Votos:</h2>
                <span>{Math.round(movieInformations.info.vote_count)}</span>
              </TrendingSlugIdVotes>

              <TrendingSlugIdVoteAverage>
                <h2>Média de votos:</h2>
                <span>
                  {parseFloat(movieInformations.info.vote_average).toFixed(2)}
                </span>
              </TrendingSlugIdVoteAverage>
            </div>

            <TrendingSlugIdVoteProducer>
              <h2>Produzido por:</h2>
              <div>
                {movieInformations.info.production_companies.map(
                  (company, index) => (
                    <div key={index}>
                      {company.logo_path ? (
                        <img
                          src={TMDB.getImage(company.logo_path)}
                          alt={company.name}
                        />
                      ) : (
                        <span>{company.name}</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </TrendingSlugIdVoteProducer>
          </TrendingSlugIdEffectHorizontal>
        </TrendingSlugIdEffectVertical>
      </TrendingSlugIdContainer>
    </>
  );
};

export default TrendingsFilmId;
