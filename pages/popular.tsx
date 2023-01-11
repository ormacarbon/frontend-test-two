import { useEffect, useState } from 'react';
import styled from "styled-components";
import MovieCard from '../components/movie-card';
import { ListButton, MovieList } from '../styles/popular'


export default function Home() {
  const [movieData, setMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1)

  useEffect(() => {
    getPopularMovies(moviePage)
  }, [moviePage])

  const getPopularMovies = (page: number) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=43090d0ed080a422f191b4b3db131431&language=pt-br&query=undefined&page=${page}`
    fetch(url)
      .then((response) => response.json())
      .then(newMovies => setMovieData(newMovies.results))
  }

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${moviePage === 1 ? 'end' : 'space-between'};
  margin-inline: 3rem;
  margin-block: 2rem;
`


  return (
    <div>
      <MovieList>
        {movieData.map(movie => (
          <MovieCard movieProps={movie} />
        ))}
      </MovieList>
      <ButtonContainer>
        {moviePage !== 1 &&
          <ListButton onClick={() => setMoviePage(moviePage - 1)}>Anterior</ListButton>
        }
        <ListButton onClick={() => setMoviePage(moviePage + 1)}>Próximo</ListButton>
      </ButtonContainer>
    </div>
  )
}