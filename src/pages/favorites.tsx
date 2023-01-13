import Link from "next/link";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { LikesContext } from '../context/FavoritesContext';
import { FavoritesContainer, Liked, MovieContainer, MoviesContainer } from "../styles/pages/favorites";
import Image from "next/image";

export default function Favorites(){
  const { likedItems, removeMovieFromLiked } = useContext(LikesContext);
  const link= 'https://image.tmdb.org/t/p/w500/';

  return(
    <FavoritesContainer>
      <h1>Filmes Favoritos</h1>
      <MoviesContainer>
        {likedItems.map(movie => (
          <MovieContainer>
              <Image src={ link + movie.imageUrl} width={200} height={150} alt={movie.title} />
              <Liked>
                <div className="star">
                  <FaStar size={24} />
                  <span>{movie.votes}</span>
                </div>
                  <button onClick={() => removeMovieFromLiked(movie.id)}>
                    <AiFillHeart size={32} color="#d60000" />
                  </button>
              </Liked>
              <h1>{movie.title}</h1>
              <Link href={`/movie/${movie.id}`} prefetch={false} passHref>
                <strong>Detalhes</strong>
              </Link>
        </MovieContainer>
        ))}
      </MoviesContainer>
    </FavoritesContainer>
  )
}
