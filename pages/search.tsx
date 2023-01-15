import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import Loader from '../components/loader';
import SearchMovieCard from '../components/search-movie-card';
import { applicationContext } from '../context/context';
import { ListButton } from '../styles/popular';
import { SearchListContainer, SearchMovieList, SearchPageContainer, SearchPageInformation } from '../styles/search';


export default function Search() {
  const [movieData, setMovieData] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>();
  const [loading, setLoading] = useState(true)
  const [moviePage, setMoviePage] = useState(1)
  const { apiKey } = useContext(applicationContext);
  const router = useRouter()
  const searchInput = router.query.searchInput

  useEffect(() => {
    if (!router.isReady) return
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-us&query=${searchInput || router.query}&page=${moviePage}`
    fetch(url)
      .then((response) => response.json())
      .then(movieSearch => {
        setMovieData(movieSearch.results.sort((a, b) => a.popularity < b.popularity))
        setSearchData(movieSearch)
        setLoading(false)
      })
  }, [searchInput, moviePage, router.isReady, router.query, apiKey])

  const emptySearch = searchData?.total_results === 0

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
        <title>Results for {searchInput}</title>
      </Head>
      <SearchPageContainer style={{ minHeight: '100vh' }}>
        {!emptySearch ?
          <SearchPageInformation>Found {searchData?.total_results} results for &quot;{searchInput}&quot; 😀</SearchPageInformation> :
          <SearchPageInformation> Sadly no results for this search 😢</SearchPageInformation>
        }
        {
          loading ?
            <Loader /> :
            <SearchListContainer>
              <SearchMovieList>
                {movieData.map((movie, index) => (
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