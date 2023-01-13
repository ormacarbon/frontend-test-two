import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, MoviesList } from "./style";
import Link from "next/link";
import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("movie/now_playing");
      setMovies(response.data.results.slice(0, 12));
      setLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      <Header />
      <Container>
        <MoviesList>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                priority={true}
              />
              <h1>{movie.title}</h1>
              <Link href={`/movie/${movie.id}`}>Details</Link>
            </div>
          ))}
        </MoviesList>
      </Container>
    </>
  );
}
