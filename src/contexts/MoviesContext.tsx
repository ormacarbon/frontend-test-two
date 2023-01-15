import { createContext, useContext, useEffect, useState } from 'react'

import { MoviesContextProps } from 'interfaces/props'
import { Genres, MoviesContextData, MoviesData } from 'interfaces/types'

import { api } from 'services/api'

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [movies, setMovies] = useState<MoviesData>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [genres, setGenres] = useState<Genres[]>([])
  const [selectedGenre, setSelectedGenre] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true)
        const { data } = await api.get(
          `/discover/movie?with_genres=${selectedGenre.toString()}&page=${page}`
        )

        setMovies(data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)

        setIsLoading(false)
      }
    }

    getMovies()
  }, [page, selectedGenre])

  useEffect(() => {
    const getGenres = async () => {
      try {
        setIsLoading(true)
        const { data } = await api.get(`/genre/movie/list`)

        setGenres(data.genres)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    getGenres()
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        page,
        setPage,
        genres,
        selectedGenre,
        setSelectedGenre
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  return useContext(MoviesContext)
}
