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
  const originalsList = await TMDB.getNetflixOriginalsSSR(1);

  const trendingBanner = await TMDB.getMovieInfo(
    originalsList.itens.results[
      Math.floor(Math.random() * originalsList.itens.results.length)
    ].id
  );

  return {
    props: { originalsList, trendingBanner }
  };
};

export default function Home({ originalsList, trendingBanner }) {
  const [originalsListPage, setOriginalsPage] = useState(1);
  const [updatedOriginalsList, setUpdatedOriginalsList] = useState([]);

  useEffect(() => {
    setUpdatedOriginalsList(originalsList);
  }, [originalsList]);

  const { changePageActive } = usePageActiveContext();
  const { darkMode } = useDarkModeContext();

  const addMoviePagination = async () => {
    setOriginalsPage(originalsListPage + 1);

    let newMovieList = await TMDB.getNetflixOriginals(originalsListPage + 1);
    setUpdatedOriginalsList(newMovieList);
  };

  const minusMoviePagination = async () => {
    if (originalsListPage > 1) {
      setOriginalsPage(originalsListPage - 1);

      let newMovieList = await TMDB.getNetflixOriginals(originalsListPage - 1);
      setUpdatedOriginalsList(newMovieList);
    }
  };

  useEffect(() => {
    changePageActive('/series');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Originals</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <FeaturedMovie movie={trendingBanner} />
        <TrendingsMovieListContainer>
          {originalsListPage > 1 ? (
            <MovieRow
              slug={updatedOriginalsList.slug}
              title={updatedOriginalsList.title}
              itens={updatedOriginalsList.itens}
              pagination
              paginationAdd={addMoviePagination}
              paginationRemove={minusMoviePagination}
              page={originalsListPage}
            />
          ) : (
            <MovieRow
              slug={originalsList.slug}
              title={originalsList.title}
              itens={originalsList.itens}
              pagination
              paginationAdd={addMoviePagination}
              paginationRemove={minusMoviePagination}
              page={1}
            />
          )}
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
