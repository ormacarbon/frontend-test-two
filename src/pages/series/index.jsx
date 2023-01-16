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
  const amazonList = await TMDB.getAmazonOriginalsSSR(1);
  const paramountPlusList = await TMDB.getParamountPlusSSR(1);

  const trendingBanner = await TMDB.getMovieInfo(
    originalsList.itens.results[
      Math.floor(Math.random() * originalsList.itens.results.length)
    ].id
  );

  return {
    props: { originalsList, amazonList, paramountPlusList, trendingBanner }
  };
};

export default function Home({
  originalsList,
  trendingBanner,
  amazonList,
  paramountPlusList
}) {
  const [originalsListPage, setOriginalsPage] = useState(1);
  const [updatedOriginalsList, setUpdatedOriginalsList] = useState([]);
  const [originalsTotalPages, setOriginalsTotalPages] = useState(1);

  const [amazonListpage, setAmazonListpage] = useState(1);
  const [updatedAmazonList, setUpdatedAmazonList] = useState([]);
  const [amazonTotalPages, setAmazonTotalPages] = useState(1);

  const [paramountPlusListPage, setParamountPlusListPage] = useState(1);
  const [updatedParamountPlusList, setUpdatedParamountPlusList] = useState([]);
  const [paramountPlusTotalPages, setParamountPlusTotalPages] = useState(1);

  const { changePageActive } = usePageActiveContext();
  const { darkMode } = useDarkModeContext();

  const addOriginalsPagination = async () => {
    if (originalsListPage < originalsTotalPages) {
      setOriginalsPage(originalsListPage + 1);

      let newMovieList = await TMDB.getNetflixOriginals(originalsListPage + 1);
      setUpdatedOriginalsList(newMovieList);
    }
  };

  const minusOriginalsPagination = async () => {
    if (originalsListPage > 1) {
      setOriginalsPage(originalsListPage - 1);

      let newMovieList = await TMDB.getNetflixOriginals(originalsListPage - 1);
      setUpdatedOriginalsList(newMovieList);
    }
  };

  const addAmazonPagination = async () => {
    if (amazonListpage < amazonTotalPages) {
      setAmazonListpage(amazonListpage + 1);

      let newAmazonList = await TMDB.getAmazonOriginals(amazonListpage + 1);
      setUpdatedAmazonList(newAmazonList);
    }
  };

  const minusAmazonPagination = async () => {
    if (amazonListpage > 1) {
      setAmazonListpage(amazonListpage - 1);

      let newAmazonList = await TMDB.getAmazonOriginals(amazonListpage - 1);
      setUpdatedAmazonList(newAmazonList);
    }
  };

  const addParamountPlusPagination = async () => {
    if (paramountPlusListPage < paramountPlusTotalPages) {
      setParamountPlusListPage(paramountPlusListPage + 1);

      let newParamountPlusList = await TMDB.getParamountPlus(
        paramountPlusListPage + 1
      );
      setUpdatedParamountPlusList(newParamountPlusList);
    }
  };

  const minusParamountPlusPagination = async () => {
    if (paramountPlusListPage > 1) {
      setParamountPlusListPage(paramountPlusListPage - 1);

      let newParamountPlusList = await TMDB.getParamountPlus(
        paramountPlusListPage - 1
      );
      setUpdatedParamountPlusList(newParamountPlusList);
    }
  };

  useEffect(() => {
    setUpdatedOriginalsList(originalsList);
    setOriginalsTotalPages(originalsList.itens.total_pages);
  }, [originalsList]);

  useEffect(() => {
    setUpdatedAmazonList(amazonList);
    setAmazonTotalPages(amazonList.itens.total_pages);
  }, [amazonList]);

  useEffect(() => {
    setUpdatedParamountPlusList(paramountPlusList);
    setParamountPlusTotalPages(paramountPlusList.itens.total_pages);
  }, [paramountPlusList]);

  useEffect(() => {
    changePageActive('/series');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Séries</title>
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
              paginationAdd={addOriginalsPagination}
              paginationRemove={minusOriginalsPagination}
              page={originalsListPage}
            />
          ) : (
            <MovieRow
              slug={originalsList.slug}
              title={originalsList.title}
              itens={originalsList.itens}
              pagination
              paginationAdd={addOriginalsPagination}
              paginationRemove={minusOriginalsPagination}
              page={1}
            />
          )}

          {amazonListpage > 1 ? (
            <MovieRow
              slug={updatedAmazonList.slug}
              title={updatedAmazonList.title}
              itens={updatedAmazonList.itens}
              pagination
              paginationAdd={addAmazonPagination}
              paginationRemove={minusAmazonPagination}
              page={amazonListpage}
            />
          ) : (
            <MovieRow
              slug={amazonList.slug}
              title={amazonList.title}
              itens={amazonList.itens}
              pagination
              paginationAdd={addAmazonPagination}
              paginationRemove={minusAmazonPagination}
              page={1}
            />
          )}

          {paramountPlusListPage > 1 ? (
            <MovieRow
              slug={updatedParamountPlusList.slug}
              title={updatedParamountPlusList.title}
              itens={updatedParamountPlusList.itens}
              pagination
              paginationAdd={addParamountPlusPagination}
              paginationRemove={minusParamountPlusPagination}
              page={paramountPlusListPage}
            />
          ) : (
            <MovieRow
              slug={paramountPlusList.slug}
              title={paramountPlusList.title}
              itens={paramountPlusList.itens}
              pagination
              paginationAdd={addParamountPlusPagination}
              paginationRemove={minusParamountPlusPagination}
              page={1}
            />
          )}
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
