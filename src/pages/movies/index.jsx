/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { useDarkModeContext } from '../../contexts/DarkMode';
import { usePageActiveContext } from '../../contexts/PageActive';

import TMDB from '../../services/tmdb';

import { MovieRow } from '../../components/MovieRow';
import { FeaturedMovie } from '../../components/FeaturedMovie';

import { TrendingsMovieListContainer } from '../../styles/Trendings';
import { HomeContainer } from '../../styles/Home';

export const getServerSideProps = async () => {
  const allFilmsList = await TMDB.getAllGenreMoviesList();

  let randonAllFilmListNumber = Math.floor(Math.random() * allFilmsList.length);
  let randomFilm = Math.floor(
    Math.random() * allFilmsList[randonAllFilmListNumber].itens.results.length
  );

  const trendingBanner = await TMDB.getMovieInfo(
    allFilmsList[randonAllFilmListNumber].itens.results[randomFilm].id
  );
  // allFilmsList[0].itens.results[]

  return {
    props: { allFilmsList, trendingBanner }
  };
};

export default function Home({ allFilmsList, trendingBanner }) {
  const { changePageActive } = usePageActiveContext();
  const { darkMode } = useDarkModeContext();

  console.log(allFilmsList);

  useEffect(() => {
    changePageActive('/movies');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Filmes</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <FeaturedMovie movie={trendingBanner} />
        <TrendingsMovieListContainer>
          {allFilmsList.map((iten, index) => (
            <MovieRow
              slug={iten.slug}
              title={iten.title}
              itens={iten.itens}
              type={'movies'}
              key={index}
            />
          ))}
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
