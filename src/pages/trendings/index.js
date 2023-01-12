import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import { useDarkModeContext } from '../../contexts/DarkMode';

import TMDB from '../../services/tmdb';
import { HomeContainer, HomeMoviesList, HomeMovies } from '../../styles/Home';
import Image from 'next/image';
import { MovieRow } from '../../components/MovieRow';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const filmList = await TMDB.getTrendings('all', 1);

  return {
    props: { filmList }
  };
};

export default function Home({ filmList }) {
  const { darkMode } = useDarkModeContext();

  console.log(filmList);

  return (
    <>
      <Head>
        <title>Trending</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <h1>{filmList.title}</h1>
        {filmList.itens ? (
          filmList.itens.results.map((iten, index) => (
            <>
              <Link href={`/trendings/${iten.media_type}/${iten.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}
                  alt={iten.title}
                />
              </Link>
              <p key={index}>teste</p>
            </>
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
      </HomeContainer>
    </>
  );
}
