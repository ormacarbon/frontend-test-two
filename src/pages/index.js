import { useDarkModeContext } from '../contexts/DarkMode';

import TMDB from '../services/tmdb';
import { HomeContainer, HomeMoviesList, HomeMovies } from '../styles/Home';
import { MovieRow } from '../components/MovieRow';
import Head from 'next/head';
import { FeaturedMovie } from '../components/FeaturedMovie';

export const getServerSideProps = async (context) => {
  //* Get a list of movies
  const filmList = await TMDB.getHomeList(1);

  //* Get featured movie
  let originals = filmList.filter((i) => i.slug === 'originals');
  let randonChosen = Math.floor(
    Math.random() * (originals[0].itens.results.length - 1)
  );
  let chosenMovie = originals[0].itens.results[randonChosen];
  let chosenMovieInfo = await TMDB.getMovieInfo(chosenMovie.id, 'tv');
  console.log(chosenMovieInfo);

  return {
    props: { filmList, featuredMovie: chosenMovieInfo }
  };
};

export default function Home({ filmList, featuredMovie }) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  console.log(featuredMovie);

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
              <MovieRow title={iten.title} itens={iten.itens} key={index} />
            ))}
        </HomeMoviesList>
      </HomeContainer>
    </>
  );
}
