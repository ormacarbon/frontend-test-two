import { MoviesContainer, SearchContainer } from "../styles/pages/search";
import { MovieCard } from "../components/MovieCard";
import { IMovie } from '../context/FavoritesContext';
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const query = req.url.replace('/', '');
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?${process.env.API_KEY}&${query}`);
  const data = await response.json();
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