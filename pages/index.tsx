import { useContext, useEffect, useState } from 'react';
import HomeMovieList from '../components/home-movie-list';
import { applicationContext } from '../context/context';
import { PageTitle } from '../styles/home';
import { IndexPage, PageDescription } from '../styles/index';
import Head from 'next/head'


export default function Index() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [inTheaterMovies, setInTheaterMovies] = useState([]);
  const [homePageMovies, setHomePageMovies] = useState({})
  const { apiKey } = useContext(applicationContext);
  let welcomeMessage: any = 'Hello!'

  const hourData = [
    [0, 4, "Good night"],
    [5, 11, "Good morning"],
    [12, 17, "Good afternoon"],
    [18, 24, "Good evening",]
  ],
    hr = new Date().getHours();

  for (var i = 0; i < hourData.length; i++) {
    if (hr >= hourData[i][0] && hr <= hourData[i][1]) {
      welcomeMessage = (hourData[i][2]);
      break
    }
  }

  useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-us&page=1&region=US`).then(value => value.json()),
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=43090d0ed080a422f191b4b3db131431&language=en-us&page=1`).then(value => value.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=43090d0ed080a422f191b4b3db131431&language=en-us&page=1`).then(value => value.json())
    ])
      .then(([upcoming, nowPlaying, popular]) => {
        setUpcomingMovies(upcoming.results)
        setPopularMovies(popular.results)
        setInTheaterMovies(nowPlaying.results)

        setHomePageMovies((prevState) => ({
          ...prevState,
          popularMovies: { ...popular, sectionTitle: 'Popular right now 🔥', route: '/popular' },
        }))
        setHomePageMovies((prevState) => ({
          ...prevState,
          inTheaterMovies: { ...nowPlaying, sectionTitle: 'Now in theaters 🎞️', route: '/in-theater' },
        }))
        setHomePageMovies(prevState => ({
          ...prevState,
          upcomingMovies: { ...upcoming, sectionTitle: 'Coming soon 🎬', route: '/soon-in-theater' }
        }))
      }).catch((err) => {
        alert(err);
      });
  }, [apiKey])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <IndexPage style={{ minHeight: '100vh' }}>
        <div>
          <PageTitle>
            <PageDescription>{welcomeMessage} and welcome to MovieRoll!</PageDescription>
            <PageDescription>What are you going to watch today?</PageDescription>
          </PageTitle>
          {Object.values(homePageMovies).map((list: any, index) => (
            <HomeMovieList key={index} movieList={list.results} title={list?.sectionTitle} route={list?.route} ></HomeMovieList >
          ))}
        </div>
      </IndexPage>
    </>
  )
}
