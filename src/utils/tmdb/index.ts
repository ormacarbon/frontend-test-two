import { MovieData, PopularMoviesResponse } from "@pages/bm-play/home"
import { tmdbApi } from "@services/tmdb"

export type GetDataParams = {
  endPoint: string
}

type Genres = {
  id: number
  name: string
}[]

const getGenres = async ({ endPoint }: GetDataParams): Promise<{genres: Genres}> => {
  const { data } = await tmdbApi.get(`${endPoint}${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)

  return data
}

const getData = async ({ endPoint }: GetDataParams): Promise<MovieData> => {
  const { data } = await tmdbApi.get<MovieData>(`${endPoint}${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)

  return data
}

const getDataPerPage = async ({
  endPoint
}: GetDataParams, page?: number): Promise<PopularMoviesResponse> => {
  const { data } = await tmdbApi.get<PopularMoviesResponse>(`${endPoint}${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)

  return data
}

export { getData, getDataPerPage, getGenres }