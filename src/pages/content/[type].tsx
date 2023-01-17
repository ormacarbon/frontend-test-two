import axios from "axios";
import { useRouter } from "next/router";
import { createContext, FormEvent, useEffect, useState } from "react";
import AnotherEntertainment from "../../components/AnotherEntertainment";
import Header from "../../components/Header";
import TopEntertainment from "../../components/TopEntertainment";
import { MainContent } from "../../styles/global";

export interface DataProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface ContextProps {
  data: DataProps[];
  type: string;
}

export const DataContext = createContext<ContextProps>({});

export default function Content() {
  const { query } = useRouter();
  const type = query.type;
  const [data, setData] = useState<DataProps[]>();

  async function searchItem(search: string) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=b59de4554604a026d4521e1afaf9d6b3&query=${search}`
      );
      const list = response.data.results;
      const filteredList = list.filter((item) => item.poster_path !== null);
      setData(filteredList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getPopular() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=b59de4554604a026d4521e1afaf9d6b3`
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getPopular();
  }, [type]);

  return (
    <DataContext.Provider value={{ type, data }}>
      <Header showSearch={true} onSearchItem={searchItem} />

      <MainContent>
        {data && (
          <>
            <AnotherEntertainment />
            <TopEntertainment />
          </>
        )}
      </MainContent>
    </DataContext.Provider>
  );
}
