import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MovieContainer, Liked } from './styles';
import { IMovie, LikesContext } from '../../context/FavoritesContext';
import { useContext } from 'react';
import Link from 'next/link';

interface MovieProps {
  movie: IMovie;
}


export function MovieCard({ movie }: MovieProps){
const { checkIfMovieAlreadyInLiked, addMovieToLiked, removeMovieFromLiked } = useContext(LikesContext);
const movieLiked = checkIfMovieAlreadyInLiked(movie.id);

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
          <button onClick={() => removeMovieFromLiked(movie.id)}>
            <AiFillHeart size={32} color="#d60000" />
          </button>
            
          ) : (
            <button onClick={() => addMovieToLiked(movie)}>
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