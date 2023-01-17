import Head from 'next/head'
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"

import { getData } from "@utils/tmdb"

import { MovieData } from "../home"

import * as Styled from '@styles/pages/movie/styled'

type GetStaticPropsContext = {
  params: {
    id: string
  }
}

type DetailsProps = {
  movieById: MovieData
}

export default function Details({ movieById }: DetailsProps): JSX.Element {

  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>BM-PLAY | {movieById.title}</title>
      </Head>
      {!isFallback && (
        <Styled.Container>
          <img
            alt="movie image"
            src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/w500${movieById.poster_path}`}
          />
          <Styled.MovieInfo>
            <p>
              <span>Título: </span> 
              {movieById.title}
            </p>
            <p>
              <span>Overview: </span> 
              {movieById.overview}
            </p>
            <p>
              <span>Classificação: </span>
              {Math.ceil(movieById.vote_average)}.0
            </p>
          </Styled.MovieInfo>
        </Styled.Container>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async({
  params,
}: GetStaticPropsContext) => {
  const movieById = await getData({
    endPoint: `/movie/${params.id}?`
  })

  return {
    props: {
      movieById
    }
  }
}