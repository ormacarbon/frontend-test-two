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
import { usePageActiveContext } from '../../contexts/PageActive';


export const getServerSideProps = async () => {
  const allList = await TMDB.getTrendings('all', 1);
  const moviesList = await TMDB.getTrendings('movie', 1);
  const seriesList = await TMDB.getTrendings('tv', 1);

  console.log(allList.itens.results.length);

  const trendingBanner = await TMDB.getMovieInfo(
    allList.itens.results[
      Math.floor(Math.random() * allList.itens.results.length)
    ].id
  );

  return {
    props: { allList, trendingBanner, moviesList, seriesList }
  };
};

export default function Home({
  allList,
  trendingBanner,
  moviesList,
  seriesList
}) {
  const [movieListPage, setMovieListPage] = useState(1);
  const [updatedMovieList, setUpdatedMovieList] = useState([]);

  const [serieListPage, setSerieListPage] = useState(1);
  const [updatedSeriesList, setUpdatedSeriesList] = useState([]);

  const [allListPage, setAllListPage] = useState(1);
  const [updatedAllList, setUpdatedAllList] = useState([]);
  const [allLoading, setAllLoading] = useState(false);

  useEffect(() => {
    setUpdatedMovieList(moviesList);
  }, [moviesList]);

  useEffect(() => {
    setUpdatedSeriesList(seriesList);
  }, [seriesList]);

  useEffect(() => {
    setUpdatedAllList(allList);
  }, [allList]);

  console.log(updatedAllList);

  const { changePageActive } = usePageActiveContext();
  const { darkMode } = useDarkModeContext();

  const addMoviePagination = async () => {
    setMovieListPage(movieListPage + 1);

    let newMovieList = await TMDB.getTrendings('movie', movieListPage + 1);
    setUpdatedMovieList(newMovieList);
  };

  const minusMoviePagination = async () => {
    if (movieListPage > 1) {
      setMovieListPage(movieListPage - 1);

      let newMovieList = await TMDB.getTrendings('movie', movieListPage - 1);
      setUpdatedMovieList(newMovieList);
    }
  };

  const addSeriePagination = async () => {
    setSerieListPage(serieListPage + 1);

    let newSerieList = await TMDB.getTrendings('tv', serieListPage + 1);
    setUpdatedSeriesList(newSerieList);
  };

  const minusSeriePagination = async () => {
    if (serieListPage > 1) {
      setSerieListPage(serieListPage - 1);

      let newSerieList = await TMDB.getTrendings('tv', serieListPage - 1);
      setUpdatedSeriesList(newSerieList);
    }
  };

  const addAllPagination = async () => {
    setAllLoading(true);
    setAllListPage(allListPage + 1);

    let newAllList = await TMDB.getTrendings('all', allListPage + 1);
    setUpdatedAllList(newAllList);
    setAllLoading(false);
  };

  const minusAllPagination = async () => {
    if (allListPage > 1) {
      setAllListPage(allListPage - 1);

      let newAllList = await TMDB.getTrendings('all', allListPage - 1);
      setUpdatedAllList(newAllList);
    }
  };

  useEffect(() => {
    changePageActive('/trendings');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Trending</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <FeaturedMovie movie={trendingBanner} />
        <TrendingsMovieListContainer>
          {movieListPage > 1 ? (
            <MovieRow
              slug={updatedMovieList.slug}
              title={updatedMovieList.title}
              itens={updatedMovieList.itens}
              pagination
              paginationAdd={addMoviePagination}
              paginationRemove={minusMoviePagination}
            />
          ) : (
            <MovieRow
              slug={moviesList.slug}
              title={moviesList.title}
              itens={moviesList.itens}
              pagination
              paginationAdd={addMoviePagination}
              paginationRemove={minusMoviePagination}
            />
          )}

          {serieListPage > 1 ? (
            <MovieRow
              slug={updatedSeriesList.slug}
              title={updatedSeriesList.title}
              itens={updatedSeriesList.itens}
              pagination
              paginationAdd={addSeriePagination}
              paginationRemove={minusSeriePagination}
            />
          ) : (
            <MovieRow
              slug={seriesList.slug}
              title={seriesList.title}
              itens={seriesList.itens}
              pagination
              paginationAdd={addSeriePagination}
              paginationRemove={minusSeriePagination}
            />
          )}

          {allListPage > 1 ? (
            <MovieRow
              slug={updatedAllList.slug}
              title={updatedAllList.title}
              itens={updatedAllList.itens}
              pagination
              paginationAdd={addAllPagination}
              paginationRemove={minusAllPagination}
              loading={allLoading}
            />
          ) : (
            <MovieRow
              slug={allList.slug}
              title={allList.title}
              itens={allList.itens}
              pagination
              paginationAdd={addAllPagination}
              paginationRemove={minusAllPagination}
            />
          )}
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
