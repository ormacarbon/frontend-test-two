import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MovieContainer, Liked } from './styles';
import { useContext } from 'react';
import Link from 'next/link';
import { ContextAplicattion, IMovie } from '../../context/ContextAplicattion';

interface MovieProps {
  movie: IMovie;
}


export function MovieCard({ movie }: MovieProps){
// Receives the functions of the context to see in the movies al aready favorited, add a movie as favorite and remove the movie from favorites
const { checkIfMovieAlreadyInFavoritesMovies, addInMoviesFavorites, removeMovieFromFavorites } = useContext(ContextAplicattion);
const movieLiked = checkIfMovieAlreadyInFavoritesMovies(movie.id);

// Link that must be passed to be able to visualize the image coming from the api
const link= 'https://image.tmdb.org/t/p/w500/';
  return (
    <MovieContainer>
      <Image src={ link + movie.imageUrl} width={200} height={150} alt={movie.title} />
      <Liked>
        <div className="star">
          <FaStar size={24} />
          <span>{movie.votes}</span>
        </div>
        {movieLiked  ? (
          <button onClick={() => removeMovieFromFavorites(movie.id)}>
            <AiFillHeart size={32} color="#d60000" />
          </button>
            
          ) : (
            <button onClick={() => addInMoviesFavorites(movie)}>
              <AiOutlineHeart size={32} color="#d60000" />
            </button>
          )}
      </Liked>
      <h1>{movie.title}</h1>
      <Link href={`/movie/${movie.id}`} prefetch={false} passHref>
        <strong>Detalhes</strong>
      </Link>
    </MovieContainer>
  )
}