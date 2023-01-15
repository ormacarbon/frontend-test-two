import { GetStaticProps } from 'next'
import * as S from 'styles/pageStyles/movie.details.styles'

import { CastCard } from 'components/CastCard'

import { api } from 'services/api'

import { tmdbImage } from 'constants/url'

import { MovieDetailsData } from 'interfaces/types'

import { formatDate } from 'utils/formatDate'
import { formatTime } from 'utils/formatTime'

export default function MovieDetails({ movie, credits }: MovieDetailsData) {
  const newDate = formatDate(movie.release_date)
  const newTime = formatTime(movie.runtime)

  const actingCast = credits.cast.filter(
    (member) => member.known_for_department === 'Acting'
  )

  const directorCast = credits.crew.filter(
    (member) => member.known_for_department === 'Directing'
  )

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <img src={tmdbImage(movie?.poster_path, 400)} alt="Imagem do filme" />
        </S.ImageContainer>

        <S.MovieInfoContainer>
          <S.MovieInfo>
            <h1>{movie.title}</h1>

            <S.Details>
              <p>{newDate} (BR)</p>

              <S.Genres>
                {movie.genres.map((genre) => (
                  <div key={genre.id}>
                    <p>{genre.name},</p>
                  </div>
                ))}
              </S.Genres>

              <p>{newTime}</p>
            </S.Details>
          </S.MovieInfo>

          <S.Sinopse>
            <h2>Sinopse</h2>

            <S.TextContainer>
              <p>{movie.overview}</p>
            </S.TextContainer>
          </S.Sinopse>

          <S.CreditsContainer>
            {actingCast
              .map((character) => (
                <div key={character.id}>
                  <h3>{character.name}</h3>
                  <p>Characters</p>
                </div>
              ))
              .slice(0, 2)}

            {directorCast
              .map((director) => (
                <div key={director.id}>
                  <h3>{director.name}</h3>
                  <p>Direção</p>
                </div>
              ))
              .slice(0, 2)}
          </S.CreditsContainer>
        </S.MovieInfoContainer>
      </S.Content>

      <S.CastContainer>
        <S.CastTitle>
          <h2>Elenco original</h2>
        </S.CastTitle>

        <S.Cast>
          {credits.cast
            .map((c) => (
              <CastCard
                key={c.id}
                name={c.name}
                profileImage={c.profile_path}
                character={c.character}
              />
            ))
            .slice(0, 6)}
        </S.Cast>
      </S.CastContainer>
    </S.Container>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: movie } = await api.get(`/movie/${params.id}`)
  const { data: credits } = await api.get(`/movie/${params.id}/credits`)

  return {
    props: { movie, credits }
  }
}
