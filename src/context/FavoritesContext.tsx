import { createContext, ReactNode, useEffect, useState } from "react";

export interface IMovie{
  id: number;
  title: string;
  votes: number;
  imageUrl: string;
}

interface LikeContextProviderProps {
  children: ReactNode;
}

interface LikeContextData {
  likedItems:  IMovie[];
  addMovieToLiked: (movie: IMovie) => void;
  checkIfMovieAlreadyInLiked: (movie: number) => boolean;
  removeMovieFromLiked: (movieId: number) => void;
}

const MOVIES_STORAGE_KEY = "Movies:likedItems";

export const LikesContext = createContext({} as LikeContextData);

export function LikeContextProvider({ children }: LikeContextProviderProps) {
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

  useEffect(() => {
    localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <LikesContext.Provider value={{ likedItems,  addMovieToLiked, checkIfMovieAlreadyInLiked, removeMovieFromLiked }}>{children}</LikesContext.Provider>
  );
}