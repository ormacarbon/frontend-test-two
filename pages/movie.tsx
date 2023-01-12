import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { contextApiKey } from '../context/context';
import { IMovie } from '../interface/movie';
import { CastInformation, CastItem, InfoFooterContainer, InfoFooterContent, InfoFooterLink, InformationTitle, MovieBackgroundMask, MovieBanner, MovieContainer, MovieInformation, MovieInformationContainer, MoviePoster, MovieTitle, MovieTitleContainer, OriginalTitle, Overview, Separator, TitleComplement } from '../styles/movie';
import { SearchMovieRating, SearchMovieRatingContainer } from '../styles/search';

export default function SearchMovieCard(props) {
  const [movieData, setMovieData] = useState<IMovie>();
  const [movieCredits, setMovieCredits] = useState<any>();
  const apiKey = useContext(contextApiKey);
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    function fetchData() {
      const { movieId } = router.query
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=PT-BR`)
        .then(response => response.json())
        .then(movie => setMovieData(movie))
    }

    function fetchCredits() {
      const { movieId } = router.query
      fetch(` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
        .then(response => response.json())
        .then(movie => setMovieCredits(movie))
    }

    fetchCredits()
    fetchData()

  }, [router.isReady])

  const movieDirector = movieCredits?.crew.find(it => it.job === "Director").original_name


  return (
    <MovieContainer>
      {movieData?.backdrop_path && (
        <>
          <MovieBackgroundMask />
          <MovieBanner src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}></MovieBanner>
        </>
      )}
      <MovieInformationContainer >
        <div>
          <MoviePoster src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" />
        </div>
        <MovieInformation>
          <MovieTitleContainer>
            <MovieTitle>{movieData?.title}</MovieTitle>
            <TitleComplement>{movieData?.release_date.slice(0, 4)}</TitleComplement>
            <TitleComplement>Dirigido por {movieDirector}</TitleComplement>
            <OriginalTitle>Título original: {movieData?.original_title}</OriginalTitle>
          </MovieTitleContainer>

          <Overview>{movieData?.overview}</Overview>

          <CastInformation>
            <InformationTitle>Elenco:</InformationTitle>
            <div >{movieCredits?.cast.slice(0, 10).map(cast => (
              <CastItem >{cast.name}</CastItem>
            ))}</div>
          </CastInformation>

          <InfoFooterContainer>
            <InfoFooterContent>{movieData?.runtime} mins</InfoFooterContent>
            <Separator />
            <InfoFooterContent>Mais em</InfoFooterContent>
            <InfoFooterLink
              target='_blank'
              href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}>
              IMDb
            </InfoFooterLink>
          </InfoFooterContainer>

        </MovieInformation>

      </MovieInformationContainer>
    </MovieContainer>
  )

}
