import { useContext, useEffect, useState } from 'react';
import MovieCard from '../components/movie-card';
import { applicationContext } from '../context/context';
import { MovieList } from '../styles/popular';

export default function InTheater() {
  const [movieData, setMovieData] = useState([]);
  const [movieQuery, setMovieQuery] = useState();
  const {apiKey} = useContext(applicationContext)


  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-br&query=${movieQuery}&region=BR`

    const response = await fetch(url)
    const jsonResponse = await response.json()

    setMovieData(jsonResponse.results)
  }

  useEffect(() => {
    getMovieRequest()
  }, [movieQuery])

  return (
    <div>
      <MovieList>
        {movieData.map(movie => (
          <MovieCard movieProps={movie} />
        ))}
      </MovieList>
    </div>
  )
}