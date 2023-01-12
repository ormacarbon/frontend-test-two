import { useContext, useEffect, useState } from 'react';
import MovieCard from '../components/movie-card';
import { MovieList } from '../styles/popular';


import Router from 'next/router';
import { contextApiKey } from '../context/context';

export default function Index() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [search, setSearch] = useState('')
  const apiKey = useContext(contextApiKey);

  useEffect(() => {
    getUpcomingMovies()
  }, [])

  const getUpcomingMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en&page=1&region=BR`
    fetch(url)
      .then((response) => response.json())
      .then(newMovies => setUpcomingMovies(newMovies.results))
  }

  return (
    <div>
      <div>
        <span>Em breve nos cinemas</span>
        <MovieList>
          {upcomingMovies.slice(0, 5).map(movie => (
            <MovieCard movieProps={movie} />
          ))}
        </MovieList>
      </div>
    </div>
  )
}
