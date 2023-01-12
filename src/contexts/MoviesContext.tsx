import { createContext, useContext, useEffect, useState } from 'react'
import { MoviesContextProps } from 'interfaces/props'
import { Movies, MoviesContextData } from 'interfaces/types'

import { api } from 'services/api'

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [movies, setMovies] = useState<Movies[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true)
      try {
        const { data } = await api.get(`/movie/popular?page=1`)

        setMovies(data.results)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    getMovies()
  }, [])

  return (
    <MoviesContext.Provider value={{ movies, isLoading }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  return useContext(MoviesContext)
}
