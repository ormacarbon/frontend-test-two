/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Movie {
  backdrop_path: string
  id: number
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
}

export interface MoviesData {
  results: Movie[]
  total_pages: number
}

export interface MoviesContextData {
  movies: MoviesData
  isLoading: boolean
  page: number
  setPage: (page: number) => void
  genres: Genres[]
  selectedGenre: any[]
  setSelectedGenre: (selectedGenre: any[]) => void
}

export interface Genres {
  id: number
  name: string
}

export interface MovieData {
  backdrop_path: string
  id: number
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
  genres: Genres[]
  runtime: number
}

export interface Cast {
  id: number
  known_for_department: string
  name: string
  profile_path: string
  character: string
}

export interface Crew {
  id: number
  known_for_department: string
  name: string
  profile_path: string
  character: string
}

export interface CastCardProps {
  name: string
  profileImage: string
  character: string
}

export interface CastData {
  cast: Cast[]
  crew: Crew[]
}

export interface Genres {
  id: number
  name: string
}

export interface MovieDetailsData {
  movie: MovieData
  credits: CastData
}

export interface ProgressContextData {
  value: number
  start: () => void
  done: () => void
}
