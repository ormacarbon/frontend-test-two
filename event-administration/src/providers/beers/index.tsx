import { createContext, ReactNode, useState, useEffect } from "react";
import { beersApi } from "../../services";

interface BeersProviderData {
  beersPage: Beers[];
  getBeers: (page: number) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface BeersProviderProps {
  children: ReactNode;
}

interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  abv: number;
  ibu: number;
}

export const BeersContext = createContext<BeersProviderData>(
  {} as BeersProviderData
);

export const BeersProvider = ({ children }: BeersProviderProps) => {
  const [beersPage, setBeersPage] = useState<Beers[]>([] as Beers[]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    beersApi
      .get("https://api.punkapi.com/v2/beers?page=1")
      .then((res) => {
        setBeersPage(res.data);
        setPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getBeers = (page: number) => {
    if (page < 1 || page > 13) {
      alert("pagina inexistente");
    } else {
      beersApi
        .get(`https://api.punkapi.com/v2/beers?page=${page}`)
        .then((res) => {
          setBeersPage(res.data);
          setPage(page);
          console.log(page);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <BeersContext.Provider value={{ beersPage, getBeers, page, setPage }}>
      {children}
    </BeersContext.Provider>
  );
};
