import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/loader';
import SearchMovieCard from '../components/search-movie-card';
import { applicationContext } from '../context/context';
import { SearchMovieList } from '../styles/search';
import styled from "styled-components";
import { ListButton } from '../styles/popular';


export default function Search() {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState<any>();
  const [loading, setLoading] = useState(true)
  const [moviePage, setMoviePage] = useState(1)
  const { apiKey } = useContext(applicationContext);

  const router = useRouter()
  const searchInput = router.query.searchInput

  useEffect(() => {
    searchMovies()
  }, [searchInput, moviePage])

  const searchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&query=${searchInput || router.query}&page=${moviePage}`
    fetch(url)
      .then((response) => response.json())
      .then(movieSearch => {
        setMovieData(movieSearch.results)
        setSearchData(movieSearch)
        setLoading(false)
      })
  }

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${moviePage === 1 ? 'end' : 'space-between'};
  margin-inline: 3rem;
  margin-block: 2rem;
`

  function handlePageChange(action: 'prev' | 'next') {
    action === 'prev' ? setMoviePage(moviePage - 1) : setMoviePage(moviePage + 1)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div>Encontramos {searchData?.total_results} resultados para <b>{searchInput}</b>  😀</div>
      {
        loading ?
          <Loader /> :
          <SearchMovieList>
            {movieData.map(movie => (
              <SearchMovieCard movieProps={movie} />
            ))}
          </SearchMovieList>

      }
      <ButtonContainer>
        {moviePage !== 1 &&
          <ListButton onClick={() => handlePageChange('prev')}>Anterior</ListButton>
        }
        <ListButton onClick={() => handlePageChange('next')}>Próximo</ListButton>
      </ButtonContainer>
    </div>
  )
}