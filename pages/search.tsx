import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/movie-card';
import { contextApiKey } from '../context/context'
import { MovieList } from '../styles/popular';

export default function Search() {
  const [movieData, setMovieData] = useState([]);
  const { asPath } = useRouter()


  // get only search value from previous page
  // using substring get the value after '='
  const searchValue = asPath.substring(asPath.indexOf('=') + 1)

  console.log(searchValue)

  useEffect(() => {
    searchMovies(searchValue)
  }, [])

  const searchMovies = (searchValue: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=43090d0ed080a422f191b4b3db131431&language=pt-br&query=${searchValue}&page=1`
    fetch(url)
      .then((response) => response.json())
      .then(newMovies => setMovieData(newMovies.results))
  }

  return (
    <div>
      <input type="text" />
      <MovieList>
        {movieData.map(movie => (
          <MovieCard movieProps={movie} />
        ))}
      </MovieList>
    </div>
  )
}