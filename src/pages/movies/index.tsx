import AnotherEntertainment from "../../components/AnotherEntertainment";
import Header from "../../components/Header";
import TopEntertainment from "../../components/TopEntertainment";

import { MainContent } from "../../styles/global";

import { useEffect, useState } from "react";

import axios from "axios";

export interface DataProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function Movies() {
  const [movies, setMovies] = useState<DataProps[]>();

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=b59de4554604a026d4521e1afaf9d6b3"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getPopularMovies();
  }, []);

  return (
    <>
      <Header showSearch={true} />

      <MainContent>
        {movies && (
          <>
            <AnotherEntertainment data={movies} movieOrSerie={"movie"} />
            <TopEntertainment data={movies} movieOrSerie={"movie"} />
          </>
        )}
      </MainContent>
    </>
  );
}
