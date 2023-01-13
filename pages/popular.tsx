import { useEffect, useState } from 'react';
import styled from "styled-components";
import Loader from '../components/loader';
import MovieCard from '../components/movie-card';
import { PageTitle } from '../styles/home';
import { ListButton, MovieList } from '../styles/popular'
import { handlePageChange } from '../utils/utils';


export default function Home() {
  const [movieData, setMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPopularMovies(moviePage)
  }, [moviePage])

  const getPopularMovies = (page: number) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=43090d0ed080a422f191b4b3db131431&language=pt-br&query=undefined&page=${page}`
    fetch(url)
      .then((response) => response.json())
      .then(newMovies => {
        setMovieData(newMovies.results)
        setLoading(false)
      })
  }

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${moviePage === 1 ? 'end' : 'space-between'};
  margin-inline: 3rem;
  margin-block: 2rem;
`

  return (
    <div>
      <PageTitle>
        <div>Populares</div>
      </PageTitle>
      {
        loading ?
          <Loader /> :
          <MovieList>
            {movieData.map(movie => (
              <MovieCard movieProps={movie} />
            ))}
          </MovieList>
      }

      <ButtonContainer>
        {moviePage !== 1 &&
          <ListButton onClick={() => handlePageChange('prev', moviePage, setMoviePage)}>Anterior</ListButton>
        }
        <ListButton onClick={() => handlePageChange('next', moviePage, setMoviePage)}>Próximo</ListButton>
      </ButtonContainer>
    </div>
  )
}