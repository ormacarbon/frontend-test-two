import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { MovieDetail } from "./style";
import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      const response = await api.get(`movie/${id}`);
      setMovie(response.data);
      setLoading(false);
    };

    loadMovie();
  });

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
      <MovieDetail>
        <div key={movie.id} className="movie-details">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              priority={true}
            />
          ) : null}
          <span>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {movie.vote_average ? (
              <h2>Popularity: {movie.vote_average.toFixed(1)} / 10</h2>
            ) : null}
            <a
              href={`https://youtube.com/results?search_query=trailer ${movie.title}`}
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              Watch Trailer
            </a>
          </span>
        </div>
      </MovieDetail>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await api.get(`movie/${id}`);
  const movie = response.data;

  return {
    props: {
      movie,
    },
  };
}
