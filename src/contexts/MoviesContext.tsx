import { createContext, useContext, useEffect, useState } from 'react'

import { MoviesContextProps } from 'interfaces/props'
import { MoviesContextData, MoviesData } from 'interfaces/types'

import { api } from 'services/api'

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [movies, setMovies] = useState<MoviesData>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true)
      try {
        const { data } = await api.get(`/movie/popular?page=${page}`)

        setMovies(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    getMovies()
  }, [page])

  return (
    <MoviesContext.Provider value={{ movies, isLoading, page, setPage }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  return useContext(MoviesContext)
}
