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

export interface MoviesContextData {
  movies: Movies[]
  isLoading: boolean
}
