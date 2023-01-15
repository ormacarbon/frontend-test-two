import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from 'next/router';

export interface IMovie{
  id: number;
  title: string;
  votes: number;
  imageUrl: string;
  vote_average: number;
  backdrop_path: string;
  tagline: string;
  revenue?: number;
  release_date: string;
  homepage: string;
  overview: string;
}

interface LikeContextProviderProps {
  children: ReactNode;
}

interface LikeContextData {
  likedItems:  IMovie[];
  getMovies: (query: string) => void;
  addMovieToLiked: (movie: IMovie) => void;
  checkIfMovieAlreadyInLiked: (movie: number) => boolean;
  removeMovieFromLiked: (movieId: number) => void;
}

const MOVIES_STORAGE_KEY = "Movies:likedItems";

export const LikesContext = createContext({} as LikeContextData);

export function LikeContextProvider({ children }: LikeContextProviderProps) {
  const router = useRouter();
  const [likedItems, setlikedItems] = useState<IMovie[]>(() => {
    if (typeof window !== 'undefined') {
      const storedMovieItems = localStorage.getItem(MOVIES_STORAGE_KEY);
      if (storedMovieItems) {
        return JSON.parse(storedMovieItems);
      }
    }
    return []
  });

  function addMovieToLiked(movie: IMovie) {
    setlikedItems((state) => [...state, movie]);
  }

  function removeMovieFromLiked(movieId: number){
    setlikedItems((state) => state.filter((movie) => movie.id !== movieId));
  }

  function checkIfMovieAlreadyInLiked(movieId: number){
    return likedItems.some((movie) => movie.id === movieId);
  }

  function getMovies(query?: string){
    return router.replace(`query=${query}`);
  }

  useEffect(() => {
    localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <LikesContext.Provider value={{ likedItems, getMovies,  addMovieToLiked, checkIfMovieAlreadyInLiked, removeMovieFromLiked }}>{children}</LikesContext.Provider>
  );
}