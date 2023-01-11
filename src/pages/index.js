import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import { useDarkModeContext } from '../contexts/DarkMode';

import TMDB from '../services/tmdb';
import { HomeContainer, HomeMoviesList, HomeMovies } from '../styles/Home';
import Image from 'next/image';
import { MovieRow } from '../components/MovieRow';

export const getServerSideProps = async () => {
  const filmList = await TMDB.getHomeList(1);

  return {
    props: { filmList }
  };
};

export default function Home({ filmList }) {
  const [filmListResult, setfilmListResult] = useState({});
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    setfilmListResult(filmList);
  }, [filmList]);
  console.log(filmListResult);



  return (
    <HomeContainer darkMode={darkMode}>
      {filmListResult.length > 0 &&
        filmListResult.map((iten, index) => (
          <MovieRow title={iten.title} itens={iten.itens} key={index} />
        ))}
    </HomeContainer>
  );
}
