import { useEffect } from 'react';
import Head from 'next/head';

import { useDarkModeContext } from '../contexts/DarkMode';
import { usePageActiveContext } from '../contexts/PageActive';

import TMDB from '../services/tmdb';

import { MovieRow } from '../components/MovieRow';
import { FeaturedMovie } from '../components/FeaturedMovie';

import { HomeContainer, HomeMoviesList } from '../styles/Home';

export const getServerSideProps = async () => {
  //* Get a list of movies
  const filmList = await TMDB.getHomeList(1);

  //* Get featured movie
  let series = filmList.filter((i) => i.slug === 'series');
  let randonChosen = Math.floor(
    Math.random() * (series[0].itens.results.length - 1)
  );
  let chosenMovie = series[0].itens.results[randonChosen];
  let chosenMovieInfo = await TMDB.getMovieInfo(chosenMovie.id, 'tv');

  let chosenMovieTrailler = await TMDB.getVideo(chosenMovie.id, 'tv');

  return {
    props: {
      filmList,
      featuredMovie: chosenMovieInfo,
      traillerInfo: chosenMovieTrailler
    }
  };
};

export default function Home({ filmList, featuredMovie, traillerInfo }) {
  const { darkMode } = useDarkModeContext();
  const { changePageActive } = usePageActiveContext();

  useEffect(() => {
    changePageActive('/');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        {featuredMovie && (
          <FeaturedMovie
            movie={featuredMovie}
            trailler={
              traillerInfo.info.results[0]
                ? traillerInfo.info.results[0].key
                : ''
            }
          />
        )}
        <HomeMoviesList>
          {filmList.length > 0 &&
            filmList.map((iten, index) => (
              <MovieRow
                title={iten.title}
                itens={iten.itens}
                slug={iten.slug}
                type={iten.type ? iten.type : null}
                key={index}
              />
            ))}
        </HomeMoviesList>
      </HomeContainer>
    </>
  );
}
