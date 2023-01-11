import React, { useEffect, useState } from "react"

import { getData } from "@utils/tmdb"

import { Movie } from "@components/movie"

import * as Styled from "@styles/pages/home"

type MovieData = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type PopularMoviesResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
}

export default function Home() {

  const [moviesList, setMoviesList] = useState<MovieData[]>([])
  
  useEffect(() => {
    const getPopularMovies = async () => {
      const response: PopularMoviesResponse = await getData({ endPoint: '/movie/popular?' })
      
      const listWithConvertedDate: MovieData[] = response.results.map(movie => {
        return {
          ...movie,
          release_date: new Date(movie.release_date).toLocaleDateString('pt-BR')
        }
      })

      setMoviesList(listWithConvertedDate)
    }

    getPopularMovies()
  }, [])

  return (
    <Styled.Main>
      <>
        {moviesList.map(movie => (
          <Movie 
            src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/w500/${movie.poster_path}`}
            key={movie.title}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </>
    </Styled.Main>
  )
}
