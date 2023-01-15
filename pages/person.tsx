

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../context/context';
import { InfoFooterLink, MovieContainer } from '../styles/movie';
import { MoviePoster } from '../styles/movie-poster';
import { Biography, ExpandButton, MovieSectionTitle, PersonDescription, PersonImage, PersonMovies, PersonName, PersonPageContainer, PersonProfile, PersonTitle } from '../styles/person';
import { MovieList } from '../styles/popular';

export default function MovieCard(props) {
  const router = useRouter();
  const { apiKey } = useContext(applicationContext)
  const [person, setPerson] = useState<any>({});
  const [credits, setCredits] = useState<any>([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    if (!router.isReady) return
    const { personId } = router.query
    Promise.all([
      fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-us`).then(value => value.json()),
      fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=43090d0ed080a422f191b4b3db131431&language=en-US`).then(value => value.json())])
      .then(([person, credits]) => {
        setPerson(person)
        setCredits(credits.cast)
      }).catch((err) => {
        alert(err);
      });


  }, [router.isReady, apiKey, router.query])

  const titles = {
    'Production': 'produced',
    'Acting': 'starred',
    'Directing': 'directed',
    'Editing': 'edited',
    'Writing': 'written'
  }

  const { biography } = person;

  const getPersonTitle = titles[person.known_for_department]
  const moviesByPopularity = (credits.sort((a, b) => a.popularity < b.popularity).slice(0, 20))

  const moviesWithPoster = moviesByPopularity.filter(movie => movie.poster_path)
  const biographyBigEnough = biography?.length > 200



  return (
    <>
      <Head>
        <title>{person.name}</title>
      </Head>
      <PersonPageContainer style={{ minHeight: '100vh' }}>
        <PersonProfile>
          <PersonImage src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`} alt="" />
          <PersonDescription> {
            !showMore
              ? <Biography>{biography}<ExpandButton onClick={() => setShowMore(!showMore)} style={{ marginLeft: '0.5rem' }}>less</ExpandButton></Biography>
              : <Biography>{biographyBigEnough ? biography?.substring(0, 200).concat('... ') : biography}
                <ExpandButton onClick={() => setShowMore(!showMore)}>{biographyBigEnough && 'more'}</ExpandButton> </Biography>
          }
          </PersonDescription>
          <PersonDescription>
            More at
            <InfoFooterLink
              target='_blank'
              href={`https://www.imdb.com/name/${person?.imdb_id}/`}>
              IMDb
            </InfoFooterLink>
          </PersonDescription>
        </PersonProfile>
        <PersonMovies >
          <MovieSectionTitle>
            <PersonTitle>
              Movies {getPersonTitle} by
            </PersonTitle>
            <PersonName>
              {person.name}
            </PersonName>
          </MovieSectionTitle>
          <MovieList style={{ gridGap: '1rem', padding: 'unset', gridTemplateColumns: 'repeat(auto-fill,minmax(145px,1fr))' }}>
            {moviesWithPoster.map((it, index) => (
              <Link key={index} href={{
                pathname: '/movie',
                query: { movieId: it.id },
              }}>
                <MovieContainer style={{ marginBottom: '1rem' }}>
                  <MoviePoster style={{ width: '100%', height: '100%' }} alt={it.title || it.original_title} src={`https://image.tmdb.org/t/p/w500${it.poster_path}`} />
                </MovieContainer>
              </Link>
            ))}
          </MovieList>
        </PersonMovies>
      </PersonPageContainer >
    </>
  )
}