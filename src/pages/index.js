import { useState, useEffect } from 'react';

import { useDarkModeContext } from '../contexts/DarkMode';

import TMDB from '../services/tmdb';
import { HomeContainer, HomeMoviesList, HomeMovies } from '../styles/Home';
import { MovieRow } from '../components/MovieRow';
import Head from 'next/head';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { usePageActiveContext } from '../contexts/PageActive';

export const getServerSideProps = async () => {
  //* Get a list of movies
  const filmList = await TMDB.getHomeList(1);

  //* Get featured movie
  let originals = filmList.filter((i) => i.slug === 'originals');
  let randonChosen = Math.floor(
    Math.random() * (originals[0].itens.results.length - 1)
  );
  let chosenMovie = originals[0].itens.results[randonChosen];
  let chosenMovieInfo = await TMDB.getMovieInfo(chosenMovie.id, 'tv');

  return {
    props: { filmList, featuredMovie: chosenMovieInfo }
  };
};

export default function Home({ filmList, featuredMovie }) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const { changePageActive } = usePageActiveContext();

  console.log(filmList);

  const [originalMovieIten, setOriginalMovieIten] = useState();

  useEffect(() => {
    const originalMovie = async () => {
      let original = await TMDB.getTvById(filmList[0].itens.results[0].id);

      setOriginalMovieIten(original);
    };
    originalMovie();
  }, [filmList]);

  useEffect(() => {
    changePageActive('/');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        {featuredMovie && <FeaturedMovie movie={featuredMovie} />}
        <HomeMoviesList>
          {filmList.length > 0 &&
            filmList.map((iten, index) => (
              <MovieRow
                title={iten.title}
                itens={iten.itens}
                slug={iten.slug}
                key={index}
              />
            ))}
        </HomeMoviesList>
      </HomeContainer>
    </>
  );
}
