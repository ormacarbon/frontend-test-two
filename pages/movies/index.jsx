import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, MoviesList, PaginationContainer } from "./style";
import Link from "next/link";
import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { Tooltip } from "@mui/material";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { theme, setTheme } = useContext(GlobalStateContext);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          page: currentPage,
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    };

    loadMovies();
  }, [currentPage]);

  useEffect(() => {
    const loadTotalPages = async () => {
      const response = await api.get("movie/now_playing");
      setTotalPages(response.data.total_pages);
    };

    loadTotalPages();
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
              {movie.title.length > 30 ? (
                <Tooltip title={movie.title}>
                  <h1>
                    {movie.title.substring(0, 15)}
                    ...
                  </h1>
                </Tooltip>
              ) : (
                <h1>{movie.title}</h1>
              )}
              <Link href={`/movie/${movie.id}`}>Details</Link>
            </div>
          ))}
        </MoviesList>
        <PaginationContainer>
          <Pagination
            count={totalPages}
            color={theme === "light" ? "primary" : "secondary"}
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
            page={currentPage}
          />
        </PaginationContainer>
      </Container>
    </>
  );
}
