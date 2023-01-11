import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import MovieCard from '../components/movie-card';
import { contextApiKey } from '../context/context';

export default function InTheater() {
  const [movieData, setMovieData] = useState([]);
  const [movieQuery, setMovieQuery] = useState();
  const apiKey = useContext(contextApiKey)


  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-br&query=${movieQuery}&region=BR`

    const response = await fetch(url)
    const jsonResponse = await response.json()

    setMovieData(jsonResponse.results)
  }

  useEffect(() => {
    getMovieRequest()
  }, [movieQuery])


  const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,170px);
  margin: 0 auto;
  justify-content: center;
  `

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