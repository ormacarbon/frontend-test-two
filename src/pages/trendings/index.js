/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import { useDarkModeContext } from '../../contexts/DarkMode';

import TMDB from '../../services/tmdb';
import { HomeContainer, HomeMoviesList, HomeMovies } from '../../styles/Home';
import Image from 'next/image';
import { MovieRow } from '../../components/MovieRow';
import Head from 'next/head';
import { FeaturedMovie } from '../../components/FeaturedMovie';
import { TrendingsMovieListContainer } from '../../styles/Trendings';

export const getServerSideProps = async () => {
  const filmList = await TMDB.getTrendings('all', 1);

  console.log(filmList.itens.results.length);

  const trendingBanner = await TMDB.getMovieInfo(
    filmList.itens.results[
      Math.floor(Math.random() * filmList.itens.results.length)
    ].id
  );

  return {
    props: { filmList, trendingBanner }
  };
};

export default function Home({ filmList, trendingBanner }) {
  const [trendingPage, setTrendingPage] = useState(1);
  const [trendingType, setTrendingType] = useState('all');
  const [trendingList, settrendingList] = useState();

  const { darkMode } = useDarkModeContext();

  const addMoviePagination = async () => {
    setTrendingPage(trendingPage + 1);
    //? all, movie, tv
    setTrendingType('all');

    let newTrending = await TMDB.getTrendings(trendingType, trendingPage + 1);
    settrendingList(newTrending);
  };

  console.log(trendingList);

  return (
    <>
      <Head>
        <title>Trending</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <FeaturedMovie movie={trendingBanner} />
        <TrendingsMovieListContainer>
          {trendingList ? (
            <MovieRow
              slug={trendingList.slug}
              title={trendingList.title}
              itens={trendingList.itens}
            />
          ) : (
            <h1>Carregando...</h1>
          )}

          {filmList.itens && (
            <MovieRow
              slug={filmList.slug}
              title={filmList.title}
              itens={filmList.itens}
            />
          )}
          <butto onClick={addMoviePagination}>teste</butto>
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
