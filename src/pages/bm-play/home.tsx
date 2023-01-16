import React from "react"

import { useMoviesContext } from "@contexts/moviesContext"
import { useListContext } from "@contexts/favoritesList"

import { Movie } from "@components/movie"
import { Pagination } from "@components/pagination"

import * as Styled from "@styles/pages/home"

export type MovieData = {
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

export type PopularMoviesResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
}

export default function Home() {
  const { addItem } = useListContext()
  const { moviesList, setCurrentPage, currentPage, totalPage } = useMoviesContext()
  
  return (
    <Styled.Main>
      <div>
        {moviesList.map(movie => (
          <Movie 
            src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/w500${movie.poster_path}`}
            key={movie.title}
            title={movie.title}
            movieId={String(movie.id)}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            actionOnClick={() => addItem(movie.id)}
          />
        ))}
      </div>
      <Pagination
        totalPage={totalPage}
        pageActive={currentPage}
        setPage={setCurrentPage}
      />
    </Styled.Main>
  )
}
