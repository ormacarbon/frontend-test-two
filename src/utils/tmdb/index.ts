import { tmdbApi } from "@services/tmdb"

export type GetDataParams = {
  endPoint: string
}

const getData = async ({ endPoint }: GetDataParams): Promise<any> => {
  const { data } = await tmdbApi.get(`${endPoint}${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
  
  return data
}

const getDataPerPage = async ({ endPoint }: GetDataParams, page: number): Promise<any> => {
  try {
    const { data } = await tmdbApi.get(`${endPoint}${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)
  
    return data
  } catch (error) {
    return []    
  }
}


export { getData, getDataPerPage }