import { useEffect, useState } from 'react';

import { useDarkModeContext } from '../contexts/DarkMode';

import TMDB from '../services/tmdb';

export const getServerSideProps = async () => {
  const filmList = await TMDB.getRomanceMovies(1);

  const filmResult = await fetch(
    'https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=f9306fe66c04a7f0d28c85fdfd4d561b'
  );
  const filmJson = await filmResult.json();
  // console.log(filmJson);
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
  console.log(filmListResult.itens);
  return (
    <div>
      {/* {filmListResult.itens !== undefined &&
        filmListResult.itens.results.map((iten, index) => (
          <h4 key={index}>{iten.title || iten.name}</h4>
        ))} */}
      <h1 onClick={toggleDarkMode}>Hello, World!</h1>
    </div>
  );
}
