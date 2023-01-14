import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import Loader from '../components/loader';
import MovieCard from '../components/movie-card';
import { applicationContext } from '../context/context';
import { PageTitle } from '../styles/home';
import { ListButton, MovieList } from '../styles/popular';
import { handlePageChange } from '../utils/utils';

export default function MoviesList(props) {
  const [movieData, setMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const { apiKey } = useContext(applicationContext)
  const { urlPrefix, pageTitle } = props;


  const getMovieRequest = async () => {
    const url = ` https://api.themoviedb.org/3/movie/${urlPrefix}?api_key=${apiKey}&language=en-US&page=${moviePage}`

    fetch(url)
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setMovieData(json.results)
        setTotalPages(json.total_pages)
      })
  }

  useEffect(() => {
    getMovieRequest()
  }, [moviePage])

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${moviePage === 1 ? 'end' : 'space-between'};
  margin-inline: 3rem;
  margin-block: 2rem;
`
  return (
    <div>
      <PageTitle>
        <div>{pageTitle && pageTitle}</div>
      </PageTitle>
      {
        loading ?
          <Loader /> :
          <MovieList>
            {movieData.map((movie, index) => (
              <MovieCard key={index} movieProps={movie} />
            ))}
          </MovieList>
      }

      <ButtonContainer>
        {moviePage !== 1 &&
          <ListButton onClick={() => handlePageChange('prev', moviePage, setMoviePage)}>Previous</ListButton>
        }
        {moviePage < totalPages && (
          <ListButton onClick={() => handlePageChange('next', moviePage, setMoviePage)}>Next</ListButton>
        )}
      </ButtonContainer>
    </div>
  )
}