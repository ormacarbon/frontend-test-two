import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/loader';
import SearchMovieCard from '../components/search-movie-card';
import { applicationContext } from '../context/context';
import { SearchListContainer, SearchMovieList, SearchPageContainer, SearchPageInformation } from '../styles/search';
import styled from "styled-components";
import Head from 'next/head'
import { ListButton } from '../styles/popular';


export default function Search() {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState<any>();
  const [loading, setLoading] = useState(true)
  const [moviePage, setMoviePage] = useState(1)
  const [genreList, setGenreList] = useState({ genreList: [], genreName: '' })
  const { apiKey } = useContext(applicationContext);
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const { genre } = router.query
    Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-us&with_genres=${genre}&page=${moviePage}`).then(value => value.json()),
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(value => value.json())])
      .then(([movies, genreList]) => {
        setMovieData(movies.results)
        setSearchData(movies)
        setLoading(false)
        setGenreList({
          genreList,
          genreName: genreList?.genres.filter(it => it.id == genre)[0].name
        })
      }).catch((err) => {
        alert(err);
      });
  }, [moviePage, router.isReady])

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
    <>
      <Head>
        <title>Search by genre {genreList.genreName}</title>
      </Head>
      <SearchPageContainer>
        <SearchPageInformation>Showing {searchData?.total_results} "{genreList.genreName}" movies 😀</SearchPageInformation>
        {
          loading ?
            <Loader /> :
            <SearchListContainer>
              <SearchMovieList>
                {movieData?.map((movie, index) => (
                  <SearchMovieCard key={index} movieProps={movie} />
                ))}
              </SearchMovieList>
            </SearchListContainer>

        }
        {searchData?.total_results !== 0 && (
          <ButtonContainer>
            {moviePage !== 1 &&
              <ListButton onClick={() => handlePageChange('prev')}>Previous</ListButton>
            }
            <ListButton onClick={() => handlePageChange('next')}>Next</ListButton>
          </ButtonContainer>
        )}
      </SearchPageContainer>
    </>

  )
}