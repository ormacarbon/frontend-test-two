import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";

import { MovieData } from "@pages/bm-play/home";
import { getDataPerPage } from "@utils/tmdb";

type MoviesContextProps = {
  totalPage: number
  currentPage: number
  moviesList: MovieData[]
  setGenreId: Dispatch<SetStateAction<number>>
  setCurrentPage: Dispatch<SetStateAction<number>>
}

type MoviesProviderParams = {
  children: ReactNode
}

const MoviesContext = createContext({} as MoviesContextProps)

const MoviesProvider = ({ children }: MoviesProviderParams): JSX.Element => {
  const [genreId, setGenreId] = useState(null)
  const [totalPage, setTotalPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesList, setMoviesList] = useState<MovieData[]>([])

  useEffect(() => {
    const getMoviesByGenre = async() => {
      const { results, total_pages } = await getDataPerPage({
        endPoint: `/discover/movie?with_genres=${genreId}&`},
        currentPage
      )

      setMoviesList(results)
      
      if(total_pages > 10) {
        setTotalPage(10)
      } else {
        setTotalPage(total_pages)
      }
    }

    const getPopularMovies = async() => {
      const { results, total_pages } = await getDataPerPage({
        endPoint: `/movie/popular?`},
        currentPage
      )

      if(results) {
        const listWithConvertedDates: MovieData[] = results.map(movieData => {
          return {
            ...movieData,
            release_date: new Date(movieData.release_date).toLocaleDateString('pt-BR')
          }
        })
        
        setMoviesList(listWithConvertedDates)

        if(total_pages > 10) {
          setTotalPage(10)
        } else {
          setTotalPage(total_pages)
        }
      }
    }

    if(genreId !== null) {
      getMoviesByGenre()
    } else {
      getPopularMovies()
    }
  }, [genreId, currentPage])

  return (
    <MoviesContext.Provider value={{
      moviesList,
      totalPage,
      setGenreId,
      currentPage,
      setCurrentPage
    }}>{children}</MoviesContext.Provider>
  )
}

const useMoviesContext = () : MoviesContextProps => {
  const context = useContext(MoviesContext)

  return context
}

export { useMoviesContext, MoviesProvider }