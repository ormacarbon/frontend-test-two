import { GetStaticProps } from "next";
import { MovieCard } from "../components/MovieCard";
import { IMovie } from "../context/FavoritesContext";
import { HomeContainer, MoviesContainer } from "../styles/pages/home";

interface MovieProps {
  movies: IMovie[];
}

export default function Home({ movies }: MovieProps) {

  return (
    <HomeContainer>
      <h1>Melhores Filmes</h1>
      <MoviesContainer>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?${process.env.API_KEY}`);
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