import AnotherEntertainment from "../../components/AnotherEntertainment";
import Header from "../../components/Header";
import TopEntertainment from "../../components/TopEntertainment";

import { MainContent } from "../../styles/global";

import { useEffect, useState } from "react";

import axios from "axios";

import { DataProps } from "../movies";

export default function Series() {
  const [series, setSeries] = useState<DataProps[]>();

  useEffect(() => {
    async function getPopularSeries() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/tv/popular?api_key=b59de4554604a026d4521e1afaf9d6b3"
        );
        setSeries(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getPopularSeries();
  }, []);

  return (
    <>
      <Header showSearch={true} />
      <MainContent>
        {series && (
          <>
            <AnotherEntertainment data={series} movieOrSerie={"serie"} />
            <TopEntertainment data={series} movieOrSerie={"tv"} />
          </>
        )}
      </MainContent>
    </>
  );
}
