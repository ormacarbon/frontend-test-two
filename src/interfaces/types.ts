export interface Movies {
  backdrop_path: string
  id: number
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

export interface MoviesData {
  results: Movies[]
  total_pages: number
}

export interface MoviesContextData {
  movies: MoviesData
  isLoading: boolean
  page: number
  setPage: (page: number) => void
}
