import { MoviesContainer, SearchContainer } from "../styles/pages/search";
import { MovieCard } from "../components/MovieCard";
import { IMovie, LikesContext } from '../context/FavoritesContext';
import { GetServerSideProps } from "next";
import { useContext } from 'react';

interface MovieProps {
  movies: IMovie[];
}

export default function Search({ movies }: MovieProps){
  return (
    <SearchContainer>
      <h1>Resultados da Pesquisa</h1>
      <MoviesContainer>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </SearchContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { query } = useContext(LikesContext)
  const response = await fetch(`https:///api.themoviedb.org/3/search/movie/?${process.env.API_KEY}&query=${query}`);
  const data = await response.json();
  console.log(query);
  const movies = data.results.map((movie) => {
     return {
      id: movie.id,
      title: movie.title,
      votes: movie.vote_average,
      imageUrl: movie.poster_path,
     }
    });
  return {
    props: {
      movies
    }
  }
}