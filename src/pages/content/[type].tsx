import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AnotherEntertainment from "../../components/AnotherEntertainment";
import Header from "../../components/Header";
import TopEntertainment from "../../components/TopEntertainment";
import { MainContent } from "../../styles/global";

interface DataProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function Content() {
  const { query } = useRouter();
  const type = query.type;
  const [data, setData] = useState<DataProps[]>();

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=b59de4554604a026d4521e1afaf9d6b3`
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    console.log(type);
    getPopularMovies();
  }, [type]);

  return (
    <>
      <Header showSearch={true} movieOrSerie={"movie"} />

      <MainContent>
        {data && (
          <>
            <AnotherEntertainment data={data} movieOrSerie={"movie"} />
            <TopEntertainment data={data} movieOrSerie={"movie"} />
          </>
        )}
      </MainContent>
    </>
  );
}
