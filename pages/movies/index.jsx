import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import {
  Container,
  MoviesList,
  PaginationContainer,
  SearchContainer,
  Button,
  FilterContainer,
  HeaderContainer,
} from "./style";
import Link from "next/link";
import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { Tooltip } from "@mui/material";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext } from "react";
import { TextField } from "@mui/material";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { theme } = useContext(GlobalStateContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          page: currentPage,
        },
      });
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    };
    loadMovies();
  }, [currentPage]);

  const NowPlayingMovies = async () => {
    const response = await api.get("movie/now_playing", {
      params: {
        page: currentPage,
      },
    });
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  const popularMovies = async () => {
    setCurrentPage(1);
    setTotalPages(1);
    const response = await api.get("movie/popular", {
      params: {
        page: currentPage,
      },
    });
    setMovies(response.data.results);
  };

  const topRatedMovies = async () => {
    setCurrentPage(1);
    setTotalPages(1);
    const response = await api.get("movie/top_rated", {
      params: {
        page: currentPage,
      },
    });
    setMovies(response.data.results);
  };

  const searchMovie = async () => {
    setCurrentPage(1);
    setTotalPages(1);
    if (search === "") {
      return;
    }
    const response = await api.get(`search/movie?query=${search}`);
    setMovies(response.data.results);
    setTotalPages(1);
  };

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
        <HeaderContainer>
          <SearchContainer>
            <TextField
              label="Search a Movie"
              variant="outlined"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              size="small"
            />
            <Button onClick={searchMovie}>Search</Button>
          </SearchContainer>
          <FilterContainer>
            <Button onClick={NowPlayingMovies}>Now Playing</Button>
            <Button onClick={popularMovies}>Popular Movies</Button>
            <Button onClick={topRatedMovies}>Top Rated Movies</Button>
          </FilterContainer>
        </HeaderContainer>
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
