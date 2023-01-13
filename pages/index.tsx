import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import HomeMovieList from '../components/home-movie-list';
import { applicationContext } from '../context/context';

export default function Index() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [inTheaterMovies, setInTheaterMovies] = useState([]);
  const [listOfMovies, setListOfMovies] = useState({})
  const { apiKey } = useContext(applicationContext);
  let welcomeMessage: any = 'Olá!'

  const hourData = [
    [0, 4, "Boa noite"],
    [5, 11, "Bom dia"],
    [12, 17, "Boa tarde"],
    [18, 24, "Boa noite",]
  ],
    hr = new Date().getHours();

  for (var i = 0; i < hourData.length; i++) {
    if (hr >= hourData[i][0] && hr <= hourData[i][1]) {
      welcomeMessage = (hourData[i][2]);
      break
    }
  }

  useEffect(() => {
    getPopularMovies()
    getUpcomingMovies()
    getInTheaterMovies()
  }, [])

  const getUpcomingMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en&page=1&region=BR`
    fetch(url)
      .then((response) => response.json())
      .then(upcomingMovies => {
        setUpcomingMovies(upcomingMovies.results)
        setListOfMovies(prevState => ({
          ...prevState,
          upcomingMovies: { ...upcomingMovies, sectionTitle: 'Em breve nos cinemas 🎬', route: '/soon-in-theater' }
        }))
      })
  }

  const getInTheaterMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=43090d0ed080a422f191b4b3db131431&language=pt-br&page=1`
    fetch(url)
      .then((response) => response.json())
      .then(inTheaterMovies => {
        setInTheaterMovies(inTheaterMovies.results)
        setListOfMovies((prevState) => ({
          ...prevState,
          inTheaterMovies: { ...inTheaterMovies, sectionTitle: 'Em exibição nos cinemas 🎞️', route: '/in-theater' },
        }))
      })
  }

  const getPopularMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=43090d0ed080a422f191b4b3db131431&language=pt-br&page=1`
    fetch(url)
      .then((response) => response.json())
      .then(popularMovies => {
        setPopularMovies(popularMovies.results)
        setListOfMovies((prevState) => ({
          ...prevState,
          popularMovies: { ...popularMovies, sectionTitle: 'Populares no momento 🔥', route: '/popular' },
        }))
      })
  }

  const Index = styled.div`
    margin-bottom: 8rem;
  `

  const IndexWelcome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
  `

  return (
    <Index>
      <IndexWelcome>
        <div>{welcomeMessage} e boas vindas ao MovieRoll!</div>
        <div>O que vai assistir hoje?</div>
      </IndexWelcome>
      {Object.values(listOfMovies).map((list: any) => (
        <HomeMovieList movieList={list.results} title={list?.sectionTitle} route={list?.route} ></HomeMovieList >
      ))}
    </Index>
  )
}
