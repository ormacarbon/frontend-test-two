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
  const allFilmsList = await TMDB.getAllGenreMoviesList();

  const actionMovieList = allFilmsList[0];
  const adventureMovieList = allFilmsList[1];
  const animationMovieList = allFilmsList[2];
  const comedyMovieList = allFilmsList[3];
  const crimeMovieList = allFilmsList[4];
  const documentaryMovieList = allFilmsList[5];
  const dramaMovieList = allFilmsList[6];
  const familyMovieList = allFilmsList[7];
  const fantasyMovieList = allFilmsList[8];
  const historyMovieList = allFilmsList[9];
  const horrorMovieList = allFilmsList[10];
  const musicMovieList = allFilmsList[11];
  const misteryMovieList = allFilmsList[12];
  const romanceMovieList = allFilmsList[13];
  const sciFiMovieList = allFilmsList[14];
  const cinemaTvMovieList = allFilmsList[15];
  const thrillerMovieList = allFilmsList[16];
  const warMovieList = allFilmsList[17];
  const westernMovieList = allFilmsList[18];

  let randonAllFilmListNumber = Math.floor(Math.random() * allFilmsList.length);
  let randomFilm = Math.floor(
    Math.random() * allFilmsList[randonAllFilmListNumber].itens.results.length
  );

  const trendingBanner = await TMDB.getMovieInfo(
    allFilmsList[randonAllFilmListNumber].itens.results[randomFilm].id
  );

  return {
    props: {
      actionMovieList,
      adventureMovieList,
      animationMovieList,
      comedyMovieList,
      crimeMovieList,
      documentaryMovieList,
      dramaMovieList,
      familyMovieList,
      fantasyMovieList,
      historyMovieList,
      horrorMovieList,
      musicMovieList,
      misteryMovieList,
      romanceMovieList,
      sciFiMovieList,
      cinemaTvMovieList,
      thrillerMovieList,
      warMovieList,
      westernMovieList,
      trendingBanner
    }
  };
};

export default function Home({
  actionMovieList,
  adventureMovieList,
  animationMovieList,
  comedyMovieList,
  crimeMovieList,
  documentaryMovieList,
  dramaMovieList,
  familyMovieList,
  fantasyMovieList,
  historyMovieList,
  horrorMovieList,
  musicMovieList,
  misteryMovieList,
  romanceMovieList,
  sciFiMovieList,
  cinemaTvMovieList,
  thrillerMovieList,
  warMovieList,
  westernMovieList,
  trendingBanner
}) {
  const { changePageActive } = usePageActiveContext();
  const { darkMode } = useDarkModeContext();

  const [actionMoviePage, setActionMoviePage] = useState(1);
  const [updatedActionList, setUpdatedActionList] = useState([]);

  const [adventureMoviePage, setAdventureMoviePage] = useState(1);
  const [updatedAdventureList, setUpdatedAdventureList] = useState([]);

  const [animationMoviePage, setAnimationMoviePage] = useState(1);
  const [updatedAnimationList, setUpdatedAnimationList] = useState([]);

  const [comedyMoviePage, setComedyMoviePage] = useState(1);
  const [updatedComedyList, setUpdatedComedyList] = useState([]);

  const [crimeMoviePage, setCrimeMoviePage] = useState(1);
  const [updatedCrimeList, setUpdatedCrimeList] = useState([]);

  const [documentaryMoviePage, setDocumentaryMoviePage] = useState(1);
  const [updatedDocumentaryList, setUpdatedDocumentaryList] = useState([]);

  const [dramaMoviePage, setDramaMoviePage] = useState(1);
  const [updatedDramaList, setUpdatedDramaList] = useState([]);

  const [familyMoviePage, setFamilyMoviePage] = useState(1);
  const [updatedFamilyList, setUpdatedFamilyList] = useState([]);

  const [fantasyMoviePage, setFantasyMoviePage] = useState(1);
  const [updatedFantasyList, setUpdatedFantasyList] = useState([]);

  const [historyMoviePage, setHistoryMoviePage] = useState(1);
  const [updatedHistoryList, setUpdatedHistoryList] = useState([]);

  const [horrorMoviePage, setHorrorMoviePage] = useState(1);
  const [updatedHorrorList, setUpdatedHorrorList] = useState([]);

  const [musicMoviePage, setMusicMoviePage] = useState(1);
  const [updatedMusicList, setUpdatedMusicList] = useState([]);

  const [misteryMoviePage, setMisteryMoviePage] = useState(1);
  const [updatedMisteryList, setUpdatedMisteryList] = useState([]);

  const [romanceMoviePage, setRomanceMoviePage] = useState(1);
  const [updatedRomanceList, setUpdatedRomanceList] = useState([]);

  const [sciFiMoviePage, setSciFiMoviePage] = useState(1);
  const [updatedSciFiList, setUpdatedSciFiList] = useState([]);

  const [cinemaTvMoviePage, setCinemaTvMoviePage] = useState(1);
  const [updatedCinemaTvList, setUpdatedCinemaTvList] = useState([]);

  const [thrillerMoviePage, setThrillerMoviePage] = useState(1);
  const [updatedThrillerList, setUpdatedThrillerList] = useState([]);

  const [warMoviePage, setWarMoviePage] = useState(1);
  const [updatedWarList, setUpdatedWarList] = useState([]);

  const [westernMoviePage, setWesternMoviePage] = useState(1);
  const [updatedWesternList, setUpdatedWesternList] = useState([]);

  const addPagination = async (slug) => {
    switch (slug) {
      case 'action':
        if (actionMoviePage < actionMovieList.itens.total_pages) {
          setActionMoviePage(actionMoviePage + 1);

          let newActionList = await TMDB.getActionMovies(actionMoviePage + 1);
          setUpdatedActionList(newActionList);
        }
        break;
      case 'adventure':
        if (adventureMoviePage < adventureMovieList.itens.total_pages) {
          setAdventureMoviePage(adventureMoviePage + 1);

          let newAdventureList = await TMDB.getAdventureMovies(
            adventureMoviePage + 1
          );
          setUpdatedAdventureList(newAdventureList);
        }
        break;
      case 'animation':
        if (animationMoviePage < animationMovieList.itens.total_pages) {
          setAnimationMoviePage(animationMoviePage + 1);

          let newAnimationList = await TMDB.getAnimationMovies(
            animationMoviePage + 1
          );
          setUpdatedAnimationList(newAnimationList);
        }
        break;
      case 'comedy':
        if (comedyMoviePage < comedyMovieList.itens.total_pages) {
          setComedyMoviePage(comedyMoviePage + 1);

          let newComedyList = await TMDB.getComedyMovies(comedyMoviePage + 1);
          setUpdatedComedyList(newComedyList);
        }
        break;
      case 'crime':
        if (crimeMoviePage < crimeMovieList.itens.total_pages) {
          setCrimeMoviePage(crimeMoviePage + 1);

          let newCrimeList = await TMDB.getCrimeMovies(crimeMoviePage + 1);
          setUpdatedCrimeList(newCrimeList);
        }
        break;
      case 'documentary':
        if (documentaryMoviePage < documentaryMovieList.itens.total_pages) {
          setDocumentaryMoviePage(documentaryMoviePage + 1);

          let newDocumentaryList = await TMDB.getDocumentaryMovies(
            documentaryMoviePage + 1
          );
          setUpdatedDocumentaryList(newDocumentaryList);
        }
        break;
      case 'drama':
        if (dramaMoviePage < dramaMovieList.itens.total_pages) {
          setDramaMoviePage(dramaMoviePage + 1);

          let newDramaList = await TMDB.getDramaMovies(dramaMoviePage + 1);
          setUpdatedDramaList(newDramaList);
        }
        break;
      case 'family':
        if (familyMoviePage < familyMovieList.itens.total_pages) {
          setFamilyMoviePage(familyMoviePage + 1);

          let newFamilyList = await TMDB.getFamilyMovies(familyMoviePage + 1);
          setUpdatedFamilyList(newFamilyList);
        }
        break;
      case 'fantasy':
        if (fantasyMoviePage < fantasyMovieList.itens.total_pages) {
          setFantasyMoviePage(fantasyMoviePage + 1);

          let newFantasyList = await TMDB.getFantasyMovies(
            fantasyMoviePage + 1
          );
          setUpdatedFantasyList(newFantasyList);
        }
        break;
      case 'history':
        if (historyMoviePage < historyMovieList.itens.total_pages) {
          setHistoryMoviePage(historyMoviePage + 1);

          let newHistoryList = await TMDB.getHistoryMovies(
            historyMoviePage + 1
          );
          setUpdatedHistoryList(newHistoryList);
        }
        break;
      case 'horror':
        if (horrorMoviePage < horrorMovieList.itens.total_pages) {
          setHorrorMoviePage(horrorMoviePage + 1);

          let newHorrorList = await TMDB.getHorrorMovies(horrorMoviePage + 1);
          setUpdatedHorrorList(newHorrorList);
        }
        break;
      case 'music':
        if (musicMoviePage < musicMovieList.itens.total_pages) {
          setMusicMoviePage(musicMoviePage + 1);

          let newMusicList = await TMDB.getMusicMovies(musicMoviePage + 1);
          setUpdatedMusicList(newMusicList);
        }
        break;
      case 'mistery':
        if (misteryMoviePage < misteryMovieList.itens.total_pages) {
          setMisteryMoviePage(misteryMoviePage + 1);

          let newMisteryList = await TMDB.getMisteryMovies(
            misteryMoviePage + 1
          );
          setUpdatedMisteryList(newMisteryList);
        }
        break;
      case 'romance':
        if (romanceMoviePage < romanceMovieList.itens.total_pages) {
          setRomanceMoviePage(romanceMoviePage + 1);

          let newRomanceList = await TMDB.getRomanceMovies(
            romanceMoviePage + 1
          );
          setUpdatedRomanceList(newRomanceList);
        }
        break;
      case 'sci-fi':
        if (sciFiMoviePage < sciFiMovieList.itens.total_pages) {
          setSciFiMoviePage(sciFiMoviePage + 1);

          let newSciFiList = await TMDB.getSciFiMovies(sciFiMoviePage + 1);
          setUpdatedSciFiList(newSciFiList);
        }
        break;
      case 'cinema-tv':
        if (cinemaTvMoviePage < cinemaTvMovieList.itens.total_pages) {
          setCinemaTvMoviePage(cinemaTvMoviePage + 1);

          let newCinemaTvList = await TMDB.getCinemaTvMovies(
            cinemaTvMoviePage + 1
          );
          setUpdatedCinemaTvList(newCinemaTvList);
        }
        break;
      case 'thriller':
        if (thrillerMoviePage < thrillerMovieList.itens.total_pages) {
          setThrillerMoviePage(thrillerMoviePage + 1);

          let newThrillerList = await TMDB.getThrillerMovies(
            thrillerMoviePage + 1
          );
          setUpdatedThrillerList(newThrillerList);
        }
        break;
      case 'war':
        if (warMoviePage < warMovieList.itens.total_pages) {
          setWarMoviePage(warMoviePage + 1);

          let newWarList = await TMDB.getWarMovies(warMoviePage + 1);
          setUpdatedWarList(newWarList);
        }
        break;
      case 'western':
        if (westernMoviePage < westernMovieList.itens.total_pages) {
          setWesternMoviePage(westernMoviePage + 1);

          let newWesternList = await TMDB.getWesternMovies(
            westernMoviePage + 1
          );
          setUpdatedWesternList(newWesternList);
        }
        break;
    }
  };

  const minusPagination = async (slug) => {
    switch (slug) {
      case 'action':
        if (actionMoviePage > 1) {
          setActionMoviePage(actionMoviePage - 1);

          let newActionList = await TMDB.getActionMovies(actionMoviePage - 1);
          setUpdatedActionList(newActionList);
        }
        break;
      case 'adventure':
        if (adventureMoviePage > 1) {
          setAdventureMoviePage(adventureMoviePage - 1);

          let newAdventureList = await TMDB.getAdventureMovies(
            adventureMoviePage - 1
          );
          setUpdatedAdventureList(newAdventureList);
        }
        break;
      case 'animation':
        if (animationMoviePage > 1) {
          setAnimationMoviePage(animationMoviePage - 1);

          let newAnimationList = await TMDB.getAnimationMovies(
            animationMoviePage - 1
          );
          setUpdatedAnimationList(newAnimationList);
        }
        break;
      case 'comedy':
        if (comedyMoviePage > 1) {
          setComedyMoviePage(comedyMoviePage - 1);

          let newComedyList = await TMDB.getComedyMovies(comedyMoviePage - 1);
          setUpdatedComedyList(newComedyList);
        }
        break;
      case 'crime':
        if (crimeMoviePage > 1) {
          setCrimeMoviePage(crimeMoviePage - 1);

          let newCrimeList = await TMDB.getCrimeMovies(crimeMoviePage - 1);
          setUpdatedCrimeList(newCrimeList);
        }
        break;
      case 'documentary':
        if (documentaryMoviePage > 1) {
          setDocumentaryMoviePage(documentaryMoviePage - 1);

          let newDocumentaryList = await TMDB.getDocumentaryMovies(
            documentaryMoviePage - 1
          );
          setUpdatedDocumentaryList(newDocumentaryList);
        }
        break;
      case 'drama':
        if (dramaMoviePage > 1) {
          setDramaMoviePage(dramaMoviePage - 1);

          let newDramaList = await TMDB.getDramaMovies(dramaMoviePage - 1);
          setUpdatedDramaList(newDramaList);
        }
        break;
      case 'family':
        if (familyMoviePage > 1) {
          setFamilyMoviePage(familyMoviePage - 1);

          let newFamilyList = await TMDB.getFamilyMovies(familyMoviePage - 1);
          setUpdatedFamilyList(newFamilyList);
        }
        break;
      case 'fantasy':
        if (fantasyMoviePage > 1) {
          setFantasyMoviePage(fantasyMoviePage - 1);

          let newFantasyList = await TMDB.getFantasyMovies(
            fantasyMoviePage - 1
          );
          setUpdatedFantasyList(newFantasyList);
        }
        break;
      case 'history':
        if (historyMoviePage > 1) {
          setHistoryMoviePage(historyMoviePage - 1);

          let newHistoryList = await TMDB.getHistoryMovies(
            historyMoviePage - 1
          );
          setUpdatedHistoryList(newHistoryList);
        }
        break;
      case 'horror':
        if (horrorMoviePage > 1) {
          setHorrorMoviePage(horrorMoviePage - 1);

          let newHorrorList = await TMDB.getHorrorMovies(horrorMoviePage - 1);
          setUpdatedHorrorList(newHorrorList);
        }
        break;
      case 'music':
        if (musicMoviePage > 1) {
          setMusicMoviePage(musicMoviePage - 1);

          let newMusicList = await TMDB.getMusicMovies(musicMoviePage - 1);
          setUpdatedMusicList(newMusicList);
        }
        break;
      case 'mistery':
        if (misteryMoviePage > 1) {
          setMisteryMoviePage(misteryMoviePage - 1);

          let newMisteryList = await TMDB.getMisteryMovies(
            misteryMoviePage - 1
          );
          setUpdatedMisteryList(newMisteryList);
        }
        break;
      case 'romance':
        if (romanceMoviePage > 1) {
          setRomanceMoviePage(romanceMoviePage - 1);

          let newRomanceList = await TMDB.getRomanceMovies(
            romanceMoviePage - 1
          );
          setUpdatedRomanceList(newRomanceList);
        }
        break;
      case 'sci-fi':
        if (sciFiMoviePage > 1) {
          setSciFiMoviePage(sciFiMoviePage - 1);

          let newSciFiList = await TMDB.getSciFiMovies(sciFiMoviePage - 1);
          setUpdatedActionList(newSciFiList);
        }
        break;
      case 'cinema-tv':
        if (cinemaTvMoviePage > 1) {
          setCinemaTvMoviePage(cinemaTvMoviePage - 1);

          let newCinemaTvList = await TMDB.getCinemaTvMovies(
            cinemaTvMoviePage - 1
          );
          setUpdatedCinemaTvList(newCinemaTvList);
        }
        break;
      case 'thriller':
        if (thrillerMoviePage > 1) {
          setThrillerMoviePage(thrillerMoviePage - 1);

          let newThrillerList = await TMDB.getThrillerMovies(
            thrillerMoviePage - 1
          );
          setUpdatedThrillerList(newThrillerList);
        }
        break;
      case 'war':
        if (warMoviePage > 1) {
          setWarMoviePage(warMoviePage - 1);

          let newWarList = await TMDB.getWarMovies(warMoviePage - 1);
          setUpdatedWarList(newWarList);
        }
        break;
      case 'western':
        if (westernMoviePage > 1) {
          setWesternMoviePage(westernMoviePage - 1);

          let newWesternList = await TMDB.getWesternMovies(
            westernMoviePage - 1
          );
          setUpdatedWesternList(newWesternList);
        }
        break;
    }
  };

  useEffect(() => {
    setUpdatedActionList(actionMovieList);
    setUpdatedAdventureList(adventureMovieList);
    setUpdatedAnimationList(animationMovieList);
    setUpdatedComedyList(comedyMovieList);
    setUpdatedCrimeList(crimeMovieList);
    setUpdatedDocumentaryList(documentaryMovieList);
    setUpdatedDramaList(dramaMovieList);
    setUpdatedFamilyList(familyMovieList);
    setUpdatedFantasyList(fantasyMovieList);
    setUpdatedHistoryList(historyMovieList);
    setUpdatedHorrorList(horrorMovieList);
    setUpdatedMusicList(musicMovieList);
    setUpdatedMisteryList(misteryMovieList);
    setUpdatedRomanceList(romanceMovieList);
    setUpdatedSciFiList(sciFiMovieList);
    setUpdatedCinemaTvList(cinemaTvMovieList);
    setUpdatedThrillerList(thrillerMovieList);
    setUpdatedWarList(warMovieList);
    setUpdatedWesternList(westernMovieList);
  }, [
    actionMovieList,
    adventureMovieList,
    animationMovieList,
    cinemaTvMovieList,
    comedyMovieList,
    crimeMovieList,
    documentaryMovieList,
    dramaMovieList,
    familyMovieList,
    fantasyMovieList,
    historyMovieList,
    horrorMovieList,
    misteryMovieList,
    musicMovieList,
    romanceMovieList,
    sciFiMovieList,
    thrillerMovieList,
    warMovieList,
    westernMovieList
  ]);

  useEffect(() => {
    changePageActive('/movies');
  }, [changePageActive]);

  return (
    <>
      <Head>
        <title>Filmes</title>
      </Head>
      <HomeContainer darkMode={darkMode}>
        <FeaturedMovie movie={trendingBanner} />
        <TrendingsMovieListContainer>
          {actionMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedActionList.slug}
              title={updatedActionList.title}
              itens={updatedActionList.itens}
              pagination
              paginationAdd={() => addPagination(updatedActionList.slug)}
              paginationRemove={() => minusPagination(updatedActionList.slug)}
              page={actionMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={actionMovieList.slug}
              title={actionMovieList.title}
              itens={actionMovieList.itens}
              pagination
              paginationAdd={() => addPagination(actionMovieList.slug)}
              paginationRemove={() => minusPagination(actionMovieList.slug)}
              page={1}
            />
          )}

          {adventureMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedAdventureList.slug}
              title={updatedAdventureList.title}
              itens={updatedAdventureList.itens}
              pagination
              paginationAdd={() => addPagination(updatedAdventureList.slug)}
              paginationRemove={() =>
                minusPagination(updatedAdventureList.slug)
              }
              page={adventureMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={adventureMovieList.slug}
              title={adventureMovieList.title}
              itens={adventureMovieList.itens}
              pagination
              paginationAdd={() => addPagination(adventureMovieList.slug)}
              paginationRemove={() => minusPagination(adventureMovieList.slug)}
              page={1}
            />
          )}

          {animationMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedAnimationList.slug}
              title={updatedAnimationList.title}
              itens={updatedAnimationList.itens}
              pagination
              paginationAdd={() => addPagination(updatedAnimationList.slug)}
              paginationRemove={() =>
                minusPagination(updatedAnimationList.slug)
              }
              page={animationMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={animationMovieList.slug}
              title={animationMovieList.title}
              itens={animationMovieList.itens}
              pagination
              paginationAdd={() => addPagination(animationMovieList.slug)}
              paginationRemove={() => minusPagination(animationMovieList.slug)}
              page={1}
            />
          )}

          {comedyMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedComedyList.slug}
              title={updatedComedyList.title}
              itens={updatedComedyList.itens}
              pagination
              paginationAdd={() => addPagination(updatedComedyList.slug)}
              paginationRemove={() => minusPagination(updatedComedyList.slug)}
              page={comedyMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={comedyMovieList.slug}
              title={comedyMovieList.title}
              itens={comedyMovieList.itens}
              pagination
              paginationAdd={() => addPagination(comedyMovieList.slug)}
              paginationRemove={() => minusPagination(comedyMovieList.slug)}
              page={1}
            />
          )}

          {crimeMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedCrimeList.slug}
              title={updatedCrimeList.title}
              itens={updatedCrimeList.itens}
              pagination
              paginationAdd={() => addPagination(updatedCrimeList.slug)}
              paginationRemove={() => minusPagination(updatedCrimeList.slug)}
              page={crimeMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={crimeMovieList.slug}
              title={crimeMovieList.title}
              itens={crimeMovieList.itens}
              pagination
              paginationAdd={() => addPagination(crimeMovieList.slug)}
              paginationRemove={() => minusPagination(crimeMovieList.slug)}
              page={1}
            />
          )}

          {documentaryMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedDocumentaryList.slug}
              title={updatedDocumentaryList.title}
              itens={updatedDocumentaryList.itens}
              pagination
              paginationAdd={() => addPagination(updatedDocumentaryList.slug)}
              paginationRemove={() =>
                minusPagination(updatedDocumentaryList.slug)
              }
              page={documentaryMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={documentaryMovieList.slug}
              title={documentaryMovieList.title}
              itens={documentaryMovieList.itens}
              pagination
              paginationAdd={() => addPagination(documentaryMovieList.slug)}
              paginationRemove={() =>
                minusPagination(documentaryMovieList.slug)
              }
              page={1}
            />
          )}

          {dramaMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedDramaList.slug}
              title={updatedDramaList.title}
              itens={updatedDramaList.itens}
              pagination
              paginationAdd={() => addPagination(updatedDramaList.slug)}
              paginationRemove={() => minusPagination(updatedDramaList.slug)}
              page={dramaMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={dramaMovieList.slug}
              title={dramaMovieList.title}
              itens={dramaMovieList.itens}
              pagination
              paginationAdd={() => addPagination(dramaMovieList.slug)}
              paginationRemove={() => minusPagination(dramaMovieList.slug)}
              page={1}
            />
          )}

          {familyMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedFamilyList.slug}
              title={updatedFamilyList.title}
              itens={updatedFamilyList.itens}
              pagination
              paginationAdd={() => addPagination(updatedFamilyList.slug)}
              paginationRemove={() => minusPagination(updatedFamilyList.slug)}
              page={familyMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={familyMovieList.slug}
              title={familyMovieList.title}
              itens={familyMovieList.itens}
              pagination
              paginationAdd={() => addPagination(familyMovieList.slug)}
              paginationRemove={() => minusPagination(familyMovieList.slug)}
              page={1}
            />
          )}

          {fantasyMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedFantasyList.slug}
              title={updatedFantasyList.title}
              itens={updatedFantasyList.itens}
              pagination
              paginationAdd={() => addPagination(updatedFantasyList.slug)}
              paginationRemove={() => minusPagination(updatedFantasyList.slug)}
              page={fantasyMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={fantasyMovieList.slug}
              title={fantasyMovieList.title}
              itens={fantasyMovieList.itens}
              pagination
              paginationAdd={() => addPagination(fantasyMovieList.slug)}
              paginationRemove={() => minusPagination(fantasyMovieList.slug)}
              page={1}
            />
          )}

          {historyMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedHistoryList.slug}
              title={updatedHistoryList.title}
              itens={updatedHistoryList.itens}
              pagination
              paginationAdd={() => addPagination(updatedHistoryList.slug)}
              paginationRemove={() => minusPagination(updatedHistoryList.slug)}
              page={historyMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={historyMovieList.slug}
              title={historyMovieList.title}
              itens={historyMovieList.itens}
              pagination
              paginationAdd={() => addPagination(historyMovieList.slug)}
              paginationRemove={() => minusPagination(historyMovieList.slug)}
              page={1}
            />
          )}

          {horrorMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedHorrorList.slug}
              title={updatedHorrorList.title}
              itens={updatedHorrorList.itens}
              pagination
              paginationAdd={() => addPagination(updatedHorrorList.slug)}
              paginationRemove={() => minusPagination(updatedHorrorList.slug)}
              page={horrorMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={horrorMovieList.slug}
              title={horrorMovieList.title}
              itens={horrorMovieList.itens}
              pagination
              paginationAdd={() => addPagination(horrorMovieList.slug)}
              paginationRemove={() => minusPagination(horrorMovieList.slug)}
              page={1}
            />
          )}

          {musicMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedMusicList.slug}
              title={updatedMusicList.title}
              itens={updatedMusicList.itens}
              pagination
              paginationAdd={() => addPagination(updatedMusicList.slug)}
              paginationRemove={() => minusPagination(updatedMusicList.slug)}
              page={musicMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={musicMovieList.slug}
              title={musicMovieList.title}
              itens={musicMovieList.itens}
              pagination
              paginationAdd={() => addPagination(musicMovieList.slug)}
              paginationRemove={() => minusPagination(musicMovieList.slug)}
              page={1}
            />
          )}

          {misteryMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedMisteryList.slug}
              title={updatedMisteryList.title}
              itens={updatedMisteryList.itens}
              pagination
              paginationAdd={() => addPagination(updatedMisteryList.slug)}
              paginationRemove={() => minusPagination(updatedMisteryList.slug)}
              page={misteryMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={misteryMovieList.slug}
              title={misteryMovieList.title}
              itens={misteryMovieList.itens}
              pagination
              paginationAdd={() => addPagination(misteryMovieList.slug)}
              paginationRemove={() => minusPagination(misteryMovieList.slug)}
              page={1}
            />
          )}

          {romanceMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedRomanceList.slug}
              title={updatedRomanceList.title}
              itens={updatedRomanceList.itens}
              pagination
              paginationAdd={() => addPagination(updatedRomanceList.slug)}
              paginationRemove={() => minusPagination(updatedRomanceList.slug)}
              page={romanceMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={romanceMovieList.slug}
              title={romanceMovieList.title}
              itens={romanceMovieList.itens}
              pagination
              paginationAdd={() => addPagination(romanceMovieList.slug)}
              paginationRemove={() => minusPagination(romanceMovieList.slug)}
              page={1}
            />
          )}

          {sciFiMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedSciFiList.slug}
              title={updatedSciFiList.title}
              itens={updatedSciFiList.itens}
              pagination
              paginationAdd={() => addPagination(updatedSciFiList.slug)}
              paginationRemove={() => minusPagination(updatedSciFiList.slug)}
              page={sciFiMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={sciFiMovieList.slug}
              title={sciFiMovieList.title}
              itens={sciFiMovieList.itens}
              pagination
              paginationAdd={() => addPagination(sciFiMovieList.slug)}
              paginationRemove={() => minusPagination(sciFiMovieList.slug)}
              page={1}
            />
          )}

          {cinemaTvMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedCinemaTvList.slug}
              title={updatedCinemaTvList.title}
              itens={updatedCinemaTvList.itens}
              pagination
              paginationAdd={() => addPagination(updatedCinemaTvList.slug)}
              paginationRemove={() => minusPagination(updatedCinemaTvList.slug)}
              page={cinemaTvMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={cinemaTvMovieList.slug}
              title={cinemaTvMovieList.title}
              itens={cinemaTvMovieList.itens}
              pagination
              paginationAdd={() => addPagination(cinemaTvMovieList.slug)}
              paginationRemove={() => minusPagination(cinemaTvMovieList.slug)}
              page={1}
            />
          )}

          {thrillerMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedThrillerList.slug}
              title={updatedThrillerList.title}
              itens={updatedThrillerList.itens}
              pagination
              paginationAdd={() => addPagination(updatedThrillerList.slug)}
              paginationRemove={() => minusPagination(updatedThrillerList.slug)}
              page={thrillerMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={thrillerMovieList.slug}
              title={thrillerMovieList.title}
              itens={thrillerMovieList.itens}
              pagination
              paginationAdd={() => addPagination(thrillerMovieList.slug)}
              paginationRemove={() => minusPagination(thrillerMovieList.slug)}
              page={1}
            />
          )}

          {warMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedWarList.slug}
              title={updatedWarList.title}
              itens={updatedWarList.itens}
              pagination
              paginationAdd={() => addPagination(updatedWarList.slug)}
              paginationRemove={() => minusPagination(updatedWarList.slug)}
              page={warMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={warMovieList.slug}
              title={warMovieList.title}
              itens={warMovieList.itens}
              pagination
              paginationAdd={() => addPagination(warMovieList.slug)}
              paginationRemove={() => minusPagination(warMovieList.slug)}
              page={1}
            />
          )}

          {westernMoviePage > 1 ? (
            <MovieRow
              type="movies"
              slug={updatedWesternList.slug}
              title={updatedWesternList.title}
              itens={updatedWesternList.itens}
              pagination
              paginationAdd={() => addPagination(updatedWesternList.slug)}
              paginationRemove={() => minusPagination(updatedWesternList.slug)}
              page={westernMoviePage}
            />
          ) : (
            <MovieRow
              type="movies"
              slug={westernMovieList.slug}
              title={westernMovieList.title}
              itens={westernMovieList.itens}
              pagination
              paginationAdd={() => addPagination(westernMovieList.slug)}
              paginationRemove={() => minusPagination(westernMovieList.slug)}
              page={1}
            />
          )}
        </TrendingsMovieListContainer>
      </HomeContainer>
    </>
  );
}
