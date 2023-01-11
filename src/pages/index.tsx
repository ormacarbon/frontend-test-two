import React, { useEffect, useState } from "react"

import { getData, getDataPerPage } from "@utils/tmdb"

import { Movie } from "@components/movie"

import * as Styled from "@styles/pages/home"
import { Pagination } from "@components/pagination"

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
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [moviesList, setMoviesList] = useState<MovieData[]>([])
  
  useEffect(() => {
    const getPopularMovies = async () => {
      const response: PopularMoviesResponse = await getData({ endPoint: '/movie/popular?' })
      
      setTotalPage(response.total_pages)
      const listWithConvertedDate: MovieData[] = response.results.map(movie => {
        return {
          ...movie,
          release_date: new Date(movie.release_date).toLocaleDateString('pt-BR')
        }
      })

      setMoviesList(listWithConvertedDate)
    }

    const getMoviesPerPage = async () => {
      const response: PopularMoviesResponse = await getDataPerPage({ endPoint: `/movie/popular?` }, currentPage)
      
      const listWithConvertedDate: MovieData[] = response.results.map(movie => {
        return {
          ...movie,
          release_date: new Date(movie.release_date).toLocaleDateString('pt-BR')
        }
      })

      setMoviesList(listWithConvertedDate)
    }

    if(currentPage === 1) {
      getPopularMovies()
    } else {
      getMoviesPerPage()
    }
  }, [currentPage])

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
      <Pagination pageActive={currentPage} totalPage={totalPage} setPage={setCurrentPage} />
    </Styled.Main>
  )
}
