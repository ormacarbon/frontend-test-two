import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../context/context';
import { IMovie } from '../interface/movie';
import { CastInformation, CastItem, InfoFooterContainer, InfoFooterContent, InfoFooterLink, InformationTitle, MovieBanner, MovieContainer, MovieInformation, MovieInformationContainer, MoviePoster, MoviePosterContainer, MovieTitle, MovieTitleContainer, Overview, Separator, TitleComplement, TitleComplementDate } from '../styles/movie';

export default function SearchMovieCard(props) {
  const [movieData, setMovieData] = useState<IMovie>();
  const [movieCredits, setMovieCredits] = useState<any>();
  const [selectedInformation, setSelectedInformation] = useState('cast');
  const { apiKey } = useContext(applicationContext);
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const { movieId } = router.query
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-us`).then(value => value.json()),
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`).then(value => value.json())
    ])
      .then(([movieData, credits]) => {
        setMovieData(movieData)
        setMovieCredits(credits)
      }).catch((err) => {
        alert(err);
      });
  }, [router.isReady, apiKey, router.query])

  function handleSelectedInformation(type: string) {
    setSelectedInformation(type)
  }

  const movieDirector = movieCredits?.crew.find(it => it.job === "Director")

  return (
    <>
      <Head>
        <title>{movieData?.title}</title>
      </Head>
      <MovieContainer style={{ minHeight: '80vh' }}>
        {movieData?.backdrop_path && (
          <>
            <MovieBanner src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}></MovieBanner>
          </>
        )}
        <MovieInformationContainer >
          <MoviePosterContainer>
            <MoviePoster src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" />
          </MoviePosterContainer>
          <MovieInformation>
            <MovieTitleContainer>
              <MovieTitle>{movieData?.title}</MovieTitle>
              <TitleComplementDate>{movieData?.release_date.slice(0, 4)}</TitleComplementDate>

              {
                movieDirector &&
                <TitleComplement>	Directed by <Link href={{
                  pathname: '/person',
                  query: { personId: movieDirector.id },
                }}>{movieDirector?.original_name}</Link>
                </TitleComplement>
              }

              <div style={{ marginTop: '2rem' }}>{movieData?.tagline}</div>

            </MovieTitleContainer>

            <Overview>{movieData?.overview}</Overview>

            {movieCredits?.cast.length > 0 &&
              <CastInformation>
                <InformationTitle style={{ color: selectedInformation === 'cast' && 'var(--header-selected-color)' }} onClick={() => handleSelectedInformation('cast')}>
                  Cast
                </InformationTitle>
                <InformationTitle style={{ color: selectedInformation === 'genres' && 'var(--header-selected-color)' }} onClick={() => handleSelectedInformation('genres')}>
                  Genres
                </InformationTitle>

                {selectedInformation === 'cast' ? (
                  <div >{movieCredits?.cast.slice(0, 10).map((cast, index) => (
                    <Link key={index} href={{
                      pathname: '/person',
                      query: { personId: cast.id },
                    }}>
                      <CastItem >{cast.name}</CastItem>
                    </Link>
                  ))}</div>
                ) : (
                  <div>{movieData?.genres.map((genre, index) => (
                    <Link key={index} href={{
                      pathname: '/genre',
                      query: { genre: genre.id },
                    }}>
                      <CastItem>{genre.name}</CastItem>
                    </Link>
                  ))}</div>
                )}
              </CastInformation>
            }

            <InfoFooterContainer>
              <InfoFooterContent>{movieData?.runtime} mins</InfoFooterContent>
              <Separator />
              <InfoFooterContent>More at</InfoFooterContent>
              <InfoFooterLink
                target='_blank'
                href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}>
                IMDb
              </InfoFooterLink>
            </InfoFooterContainer>

          </MovieInformation>

        </MovieInformationContainer>
      </MovieContainer >
    </>
  )

}
