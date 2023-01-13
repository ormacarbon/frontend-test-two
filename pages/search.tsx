import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import SearchMovieCard from '../components/search-movie-card';
import { applicationContext } from '../context/context';
import { SearchMovieList } from '../styles/search';


export default function Search() {
  const [movieData, setMovieData] = useState([]);
  const {apiKey} = useContext(applicationContext);

  const router = useRouter()
  const searchInput = router.query.searchInput

  useEffect(() => {
    searchMovies()
  }, [searchInput])

  const searchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&query=${searchInput}&page=1`
    fetch(url)
      .then((response) => response.json())
      .then(newMovies => setMovieData(newMovies.results))
  }

  return (
    <div>
      <SearchMovieList>
        {movieData.map(movie => (
          <SearchMovieCard movieProps={movie} />
        ))}
      </SearchMovieList>
    </div>
  )
}