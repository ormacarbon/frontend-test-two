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

interface ContextAplicattionProviderProps {
  children: ReactNode;
}


interface ContextAplicattionData {
  likedItems:  IMovie[];
  getMovies: (query: string) => void;
  addInMoviesFavorites: (movie: IMovie) => void;
  checkIfMovieAlreadyInFavoritesMovies: (movie: number) => boolean;
  removeMovieFromFavorites: (movieId: number) => void;
}

const MOVIES_STORAGE_KEY = "Movies:likedItems";

export const ContextAplicattion = createContext({} as ContextAplicattionData);

export function ContextAplicattionProvider({ children }: ContextAplicattionProviderProps) {
  const router = useRouter();

  //Status of items that are favorites and also seeing wich ones are saved in the LocalStorage of the machine by searching for the key in which the movie was saved
  const [likedItems, setlikedItems] = useState<IMovie[]>(() => {
    if (typeof window !== 'undefined') {
      const storedMovieItems = localStorage.getItem(MOVIES_STORAGE_KEY);
      if (storedMovieItems) {
        return JSON.parse(storedMovieItems);
      }
    }
    return []
  });

  function addInMoviesFavorites(movie: IMovie) {
    setlikedItems((state) => [...state, movie]);
  }

  function removeMovieFromFavorites(movieId: number){
    setlikedItems((state) => state.filter((movie) => movie.id !== movieId));
  }

  function checkIfMovieAlreadyInFavoritesMovies(movieId: number){
    return likedItems.some((movie) => movie.id === movieId);
  }

  //Funcgtion of receiving the query sent by the search from and navigating the user to the search result
  function getMovies(query?: string){
    return router.replace(`query=${query}`);
  }

  //Slave favorites movies to LocalStorage, along with a key to help ypu easily see which movies are saved in LocalStorage
  useEffect(() => {
    localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <ContextAplicattion.Provider value={{ likedItems,  getMovies,  addInMoviesFavorites, checkIfMovieAlreadyInFavoritesMovies, removeMovieFromFavorites }}>{children}</ContextAplicattion.Provider>
  );
}